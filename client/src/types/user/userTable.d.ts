export interface IUserTableData {
  id?: string;
  password: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  email: string;
  courses: string[];
  }
  
  export interface IUserTableHeadCell {
    id: keyof IPatientTableData;
    label: string;
    numeric: boolean;
  }
  