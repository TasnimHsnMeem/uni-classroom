/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type ICourse = {
  notice: string;
  post: string[];
  teacher: Types.ObjectId;
  student: string[];
  name: string;
  assignments: string[];
};

export type CourseModel = Model<ICourse, Record<string, unknown>>;
