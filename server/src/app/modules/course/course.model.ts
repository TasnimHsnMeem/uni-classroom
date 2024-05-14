import mongoose, { Schema } from 'mongoose';

import { CourseModel, ICourse } from './course.interface';

const courseSchema = new Schema<ICourse>(
  {
    notice: { type: String },
    post: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    student: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    assignments: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true },
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

const Course = mongoose.model<ICourse, CourseModel>('Course', courseSchema);

export default Course;
