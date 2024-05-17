import React, { useEffect } from "react";
import CreateAssignment from "./CreateAssignment";
import AssignmentAll from "./AssignmentAll";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { userRoles } from "../../../../../constants/user";
import { useParams } from "react-router-dom";
import courseService from "../../../../../services/course";
import { FormikValues } from "formik";
import { setLoadingAction } from "../../../../../redux/utils/actions";
import assignmentService from "../../../../../services/assignment";
import { toast } from "react-toastify";

type Props = {};

const Assignment = (props: Props) => {
  const { _id , role } = useAppSelector((state) => state.auth.profileData.user);

  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = React.useState<any>();
  const getCourseData = async () => {
    try {
      if (id && _id) {
        const result = await courseService.getById(id!);
        setCourse(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { id: courseId } = useParams();
  const dispatch = useAppDispatch();

  const saveAssignmentHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };

      // for (const key of Object.keys(validValues)) {
      //   if (!validValues[key]) {
      //     delete validValues[key];
      //   }
      // }
      dispatch(setLoadingAction(true));
      let res: any;

      res = await assignmentService.create(courseId!, { ...validValues });
      getCourseData();
      dispatch(setLoadingAction(false));
      toast.success("Assignment created successfully");
      // navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  useEffect(() => {
    getCourseData();
  }, [id, _id]);

  return (
    <div >
      {[userRoles.TEACHER, userRoles.ADMIN].includes(role) && <CreateAssignment saveAssignmentHandler={saveAssignmentHandler}/>}
      <AssignmentAll course={course}/>
    </div>
  );
};

export default Assignment;
