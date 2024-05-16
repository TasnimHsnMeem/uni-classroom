/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IAdminNotice = {
  title: string;
  content: string;
};

export type AdminNoticeModel = Model<IAdminNotice, Record<string, unknown>>;
