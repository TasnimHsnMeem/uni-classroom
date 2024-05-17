import React from "react";
import CreateCourseWork from "./CreateCourseWork";
import { IPost, IUser } from "../CourseDetails";
import CourseWorkTable from "./CourseWorkTable";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { FormikValues } from "formik";
import { setLoadingAction } from "../../../../../redux/utils/actions";
import postService from "../../../../../services/post";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

type Props = {
  posts: string[];
  teacher: IUser;
  refetch: () => Promise<void>;
};

const CourseWork = (props: Props) => {
  const { posts, teacher, refetch } = props;
  const { user } = useAppSelector((state) => state.auth.profileData);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const saveCourseWorkHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };
      dispatch(setLoadingAction(true));
      let res: any;
      res = await postService.create(id!, { ...validValues });
      refetch();
      dispatch(setLoadingAction(false));
      toast.success("Success");
      // navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  return (
    <>
      {user._id === teacher.id && (
        <CreateCourseWork saveCourseWorkHandler={saveCourseWorkHandler} />
      )}
      <CourseWorkTable posts={posts} />
    </>
  );
};

export default CourseWork;
