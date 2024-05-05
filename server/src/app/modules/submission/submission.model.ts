import mongoose, { Schema } from 'mongoose';

import { SubmissionModel, ISubmission } from './submission.interface';

const submissionSchema = new Schema<ISubmission>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    feedback: {
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

const Submission = mongoose.model<ISubmission, SubmissionModel>(
  'Submission',
  submissionSchema
);

export default Submission;
