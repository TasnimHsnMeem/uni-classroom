import mongoose, { Schema, Types } from 'mongoose';

import { AssignmentModel, IAssignment } from './assignment.interface';

const assignmentSchema = new Schema<IAssignment>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    submissions: {
      type: [Types.ObjectId],
      default: [],
      ref: 'Submission',
    },
    files: {
      type: [String],
      default: [],
    }
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

const Assignment = mongoose.model<IAssignment, AssignmentModel>(
  'Assignment',
  assignmentSchema
);

export default Assignment;
