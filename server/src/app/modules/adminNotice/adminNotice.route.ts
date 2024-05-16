import express from 'express';

import { AdminNoticeController } from './adminNotice.controller';

const router = express.Router();

router
  .get('/', AdminNoticeController.getAllAdminNotices)
  .post('/', AdminNoticeController.createAdminNotice);

router
  .get('/:id', AdminNoticeController.getSingleAdminNotice)
  .put('/:id', AdminNoticeController.updateAdminNotice)
  .delete('/:id', AdminNoticeController.deleteSingleAdminNotice);

export const AdminNoticeRoutes = router;
