import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import courseService from "../../../../services/course";
import { logger } from "../../../../utils/logger";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import Assignment from "./assignment/Assignment";
import Notice from "./notice/Notice";
import CourseWorkTable from "./post/CourseWorkTable";
import CourseWork from "./post/CourseWork";
import CreateNotice from "./notice/AddNotice";
import CourseStudent from "../CourseStudent/CourseStudent";
import RoutingList from "../../../../utils/RoutingList";
import ConfirmationModal from "../../../common/modal/confirmationModal/ConfirmationModal";
import { toast } from "react-toastify";
import { userRoles } from "../../../../constants/user";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
  const { role } = useAppSelector((state) => state.auth.profileData.user);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [value, setValue] = React.useState(0);
  const [courseData, setCourseData] = React.useState<ICourse>({} as ICourse);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

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
      } catch (error: any) {
        dispatch(setLoadingAction(false));
        logger.error(error);
      }
    }
  };

  const handleLeaveClass = async () => {
    if (id) {
      try {
        dispatch(setLoadingAction(true));
        // await leaveClass(id, userId);
        const res = await courseService.leaveClass(id);
        dispatch(setLoadingAction(false));
        toast.success("Left class successfully");
        navigate(RoutingList.course.index);
      } catch (error: any) {
        dispatch(setLoadingAction(false));
        logger.error(error);
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ width: "100%", padding: "16px" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginBottom: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
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
            <Avatar
              alt={courseData?.teacher?.name?.firstName}
              src="/static/images/avatar/1.jpg"
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Teacher:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#555",
                }}
              >
                {courseData?.teacher?.name?.firstName}{" "}
                {courseData?.teacher?.name?.lastName}
              </Typography>
            </Box>
          </Box>
        </Box>
        {[userRoles.STUDENT].includes(role) && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowConfirmationModal(true);
            }}
            sx={{
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ExitToAppIcon />
            Leave Class
          </Button>
        )}
      </Paper>
      <ConfirmationModal
        open={showConfirmationModal}
        onConfirm={handleLeaveClass}
        description="Are you sure you want to leave this class?"
        submitText="Leave"
        onClose={() => {
          setShowConfirmationModal(false);
        }}
      />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Notice" {...a11yProps(0)} />
          <Tab label="Classwork" {...a11yProps(1)} />
          <Tab label="Assignment" {...a11yProps(2)} />
          <Tab label="Enrolled Students" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CreateNotice />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CourseWork
          posts={courseData.post}
          teacher={courseData.teacher}
          refetch={getData}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Assignment />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CourseStudent students={courseData.student} />
      </CustomTabPanel>
    </Box>
  );
}
