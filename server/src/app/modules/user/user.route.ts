import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', 
// auth(USER_ROLE.ADMIN), 
UserController.getAllUsers);

router
  .route('/my-profile')
  // .get(auth(USER_ROLE.STUDENT, USER_ROLE.TEACHER), UserController.getUserProfile)
  .patch(
    // auth(USER_ROLE.STUDENT, USER_ROLE.TEACHER),
    // validateRequest(userValidation.updateUserZodSchema),
    UserController.updateMyUserProfile
  );

router
  .route('/:id')
  .get(
    // auth(USER_ROLE.ADMIN), 
    UserController.getSingleUser)
  .patch(
    // auth(USER_ROLE.ADMIN),
    // validateRequest(userValidation.updateUserZodSchema),
    UserController.updateUser
  )
  .delete(
    // auth(USER_ROLE.ADMIN), 
    UserController.deleteSingleUser);

export const UserRoutes = router;
