import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router
  .get('/', CourseController.getAllCourses)
  .post('/', CourseController.createCourse);

router.get('/join/:id', CourseController.joinCourse);

router.get('/:id', CourseController.getSingleCourse);


export const CourseRoutes = router;
