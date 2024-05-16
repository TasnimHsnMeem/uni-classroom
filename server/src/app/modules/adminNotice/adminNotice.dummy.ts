import AdminNotice from './adminNotice.model';

export const addAdminNotice = async () => {
  const allUsers = await AdminNotice.find();
  if (allUsers.length) {
    console.log('Dummy admin notice already exists');
    return;
  }
  const adminNotice = new AdminNotice();
  adminNotice.title = 'Admin Notice';
  adminNotice.content = 'This is an admin notice.';

  try {
    await adminNotice.save();
    console.log('Dummy notice added successfully');
  } catch (error) {
    console.error('Failed to add dummy user:', error);
  }
};
