import express from 'express';

import { AssignmentController } from './assignment.controller';

const router = express.Router();

router
  .get('/', AssignmentController.getAllAssignments)
  .post('/', AssignmentController.createAssignment);

export const AssignmentRoutes = router;
