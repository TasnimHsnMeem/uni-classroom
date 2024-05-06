import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { IUser, IsUserExist, UserModel } from './user.interface';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { USER_ROLE } from '../../../enums';
import config from '../../../config';
const { Schema } = mongoose;

export const userSchema = new Schema<IUser, UserModel>(
  {
    password: {
      type: String,
      required: true,
      select: 0,
      default: config.default_user_password,
    },
    role: {
      type: String,
      enum: [USER_ROLE.STUDENT, USER_ROLE.TEACHER, USER_ROLE.ADMIN],
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Class',
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        delete ret.__v;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

userSchema.statics.isUserExist = async function (
  email: string
): Promise<IsUserExist | null> {
  return await User.findOne({ email }, { id: 1, role: 1, password: 1, name: 1, phoneNumber: 1, address: 1, courses: 1, email: 1});
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre('findOneAndUpdate', async function (next) {
  const isExist = await User.findById(this.getQuery()._id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }
  if ((this.getUpdate() as any)?.password) {
    (this.getUpdate() as any).password = await bcrypt.hash(
      (this.getUpdate() as any).password,
      Number(config.bycrypt_salt_rounds)
    );
  }
  next();
});

userSchema.pre('save', async function (next) {
  const isExist = await User.findOne({
    email: this.email,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'User email already exists !'
    );
  }
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

const User = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
