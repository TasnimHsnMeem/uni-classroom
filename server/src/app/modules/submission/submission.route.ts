import express from 'express';
import { SubmissionController } from './submission.controller';

const router = express.Router();

router
  .get('/', SubmissionController.getAllSubmissions)
  .post('/', SubmissionController.createSubmission);

router.get('/:id', SubmissionController.getSingleSubmission);


export const SubmissionRoutes = router;
