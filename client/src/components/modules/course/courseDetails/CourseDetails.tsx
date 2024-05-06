import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CourseNotice from "./CourseNotice";
import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import { logger } from "../../../../utils/logger";
import courseService from "../../../../services/course";
import { useParams } from "react-router-dom";
import { set } from "../../../../utils/storage";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
  const [courseData, setCourseData] = React.useState({});
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
        <CourseNotice courseData={courseData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
