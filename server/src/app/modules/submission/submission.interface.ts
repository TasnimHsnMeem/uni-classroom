/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type ISubmission = {
  title: string;
  content: string;
  marks: number;
  feedback: string;
};

export type SubmissionModel = Model<ISubmission, Record<string, unknown>>;
