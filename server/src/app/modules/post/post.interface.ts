/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IPost = {
  title: string;
  content: string;
  files: string[];
};

export type PostModel = Model<IPost, Record<string, unknown>>;
