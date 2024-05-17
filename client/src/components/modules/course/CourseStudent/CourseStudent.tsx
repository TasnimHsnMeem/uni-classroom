import React, { useEffect } from "react";
import { IUser } from "../courseDetails/CourseDetails";
import userService from "../../../../services/user";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

type Props = {
  students: any[];
};

const CourseStudent = (props: Props) => {
  const classes = useStyles();
  const { students: studentIds } = props;
  const [students, setStudents] = React.useState<IUser[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (studentIds) {
        try {
          for (const studentId of studentIds) {
            try {
              const res = await userService.getById(studentId);
              setStudents((prev) => {
                if (prev.some((x) => x.email === res.data.data.email)) return prev;
                return [...prev, res.data.data];
              });
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getData();
  }, [studentIds]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="students table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.length > 0 &&
            students.map((student, index) => (
              <TableRow key={student.email}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name.firstName}</TableCell>
                <TableCell>{student.name.lastName}</TableCell>
                <TableCell>{student.email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseStudent;
