/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IAssignment = {
  title: string;
  content: string;
  submissions: string[];
};

export type AssignmentModel = Model<IAssignment, Record<string, unknown>>;
