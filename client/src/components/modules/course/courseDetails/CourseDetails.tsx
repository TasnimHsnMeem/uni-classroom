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
import CreateNotice from "./notice/AddNotice";
import CourseStudent from "../CourseStudent/CourseStudent";

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
}

export interface ICourse {
  notice: string;
  post: string[];
  teacher: IUser;
  student: IUser[];
  name: string;
  assignments: IAssignment[];
}

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
  const [courseData, setCourseData] = React.useState<ICourse>({} as ICourse);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  React.useEffect(() => {
    // console.log("value", value);
    
    getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          margin: "0 0 32px 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "16px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {courseData.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Teacher:
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#555",
            }}
          >
            {courseData?.teacher?.name?.firstName}{" "}
            {courseData?.teacher?.name?.lastName}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Notice" {...a11yProps(0)} />
          <Tab label="Stream" {...a11yProps(1)} />
          <Tab label="Assignment" {...a11yProps(2)} />
          <Tab label="Enrolled Students" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CreateNotice />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CourseWork posts={courseData.post} teacher={courseData.teacher} refetch={getData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Assignment />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CourseStudent students={courseData.student}/>
      </CustomTabPanel>
    </Box>
  );
}
