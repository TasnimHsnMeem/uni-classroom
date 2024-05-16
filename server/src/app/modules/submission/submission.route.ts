import express from 'express';
import { SubmissionController } from './submission.controller';

const router = express.Router();

router
  .get('/', SubmissionController.getAllSubmissions)
  .post('/', SubmissionController.createSubmission);

router.get('/studentsAllSubmission/:assignmentId/:userId', SubmissionController.getAllSubmissionsByUserId);

router.get('/:id', SubmissionController.getSingleSubmission).patch('/:id', SubmissionController.updateSubmission)


export const SubmissionRoutes = router;
