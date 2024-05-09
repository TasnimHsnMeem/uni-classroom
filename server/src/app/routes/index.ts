import express from 'express';

import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CourseRoutes } from '../modules/course/course.route';
import { PostRoutes } from '../modules/post/post.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/course',
    route: CourseRoutes
  },
  {
    path: '/post',
    route: PostRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
