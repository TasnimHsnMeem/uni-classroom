import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import courseService from "../../../../services/course";
import { logger } from "../../../../utils/logger";
import Assignment from "./assignment/Assignment";
import Notice from "./notice/Notice";
import CourseWorkTable from "./post/CourseWorkTable";
import CourseWork from "./post/CourseWork";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export enum USER_ROLE {
  TEACHER = "teacher",
  STUDENT = "student",
  ADMIN = "admin",
}

export interface IUser {
  id?: string;
  password: string;
  role: USER_ROLE.STUDENT | USER_ROLE.TEACHER | USER_ROLE.ADMIN;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  email: string;
  courses: string[];
}


export interface IPost {
  title: string;
  content: string;
  files: string[];
};


export interface ICourse {
  notice: string;
  post: string[];
  teacher: IUser
  student: IUser[];
  name: string;
  assignments: IAssignment[];
};

export interface IAssignment {
  title: string;
  content: string;
  submissions: ISubmission[];
}

export interface ISubmission {
  title: string;
  content: string;
  marks: number;
  feedback: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CourseDetails() {
  const [value, setValue] = React.useState(0);
  const [courseData, setCourseData] = React.useState<ICourse>(
    {} as ICourse
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // console.log("value", value);
    const getData = async () => {
      if (id) {
        try {
          dispatch(setLoadingAction(true));
          const res = await courseService.getById(id);
          setCourseData(res.data.data);
          dispatch(setLoadingAction(false));

          const formValues = {
            ...res.data.data,
          };
          // setValues(formValues);
        } catch (error: any) {
          dispatch(setLoadingAction(false));
          logger.error(error);
        }
      }
    };
    getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Notice" {...a11yProps(0)} />
          <Tab label="Classwork" {...a11yProps(1)} />
          <Tab label="Assignment" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Notice notice={courseData.notice} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CourseWork posts={courseData.post} teacher={courseData.teacher}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Assignment />
      </CustomTabPanel>
    </Box>
  );
}
