import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router
  .get('/', CourseController.getAllCourses)
  .post('/', CourseController.createCourse);

export const CourseRoutes = router;
