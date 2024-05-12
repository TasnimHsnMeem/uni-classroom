import { USER_ROLE } from '../../../enums';
import User from './user.model';

export const addDummyUser = async () => {
  const allUsers = await User.find();
  if (allUsers.length) {
    console.log('Dummy user already exists');
    return;
  }
  const user = new User();
  user.password = 'abrakadabra';
  user.role = USER_ROLE.ADMIN;
  user.name = {
    firstName: 'Admin',
    lastName: 'User',
  };
  user.phoneNumber = '01711111111';
  user.email = 'admin@metrouni.edu.bd';
  user.address = 'Sylhet';
  user.courses = [];

  try {
    await user.save();
    console.log('Dummy user added successfully');
  } catch (error) {
    console.error('Failed to add dummy user:', error);
  }
};
