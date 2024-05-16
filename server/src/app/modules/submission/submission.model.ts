import mongoose, { Schema } from 'mongoose';

import { SubmissionModel, ISubmission } from './submission.interface';

const submissionSchema = new Schema<ISubmission>(
  {
    title: {
      type: String,
      default: "",
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      default: null
    },
    feedback: {
      default: "",
      type: String,
      required: false
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    assignment:{
      type: Schema.Types.ObjectId,
      ref: 'Assignment',
      required: true
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

const Submission = mongoose.model<ISubmission, SubmissionModel>(
  'Submission',
  submissionSchema
);

export default Submission;
