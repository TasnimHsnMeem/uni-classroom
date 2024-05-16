import mongoose, { Schema } from 'mongoose';
import { AdminNoticeModel, IAdminNotice } from './adminNotice.interface';


const adminNoticeSchema = new Schema<IAdminNotice>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

const AdminNotice = mongoose.model<IAdminNotice, AdminNoticeModel>('AdminNotice', adminNoticeSchema);

export default AdminNotice;
