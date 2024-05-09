import React from "react";
import CreateCourseWork from "./CreateCourseWork";
import { IPost, IUser } from "../CourseDetails";
import CourseWorkTable from "./CourseWorkTable";
import { useAppSelector } from "../../../../../redux/store";

type Props = {
  posts: string[];
  teacher: IUser;
};

const CourseWork = (props: Props) => {
  const { posts, teacher } = props;
  const { user } = useAppSelector((state) => state.auth.profileData);

  return (
    <>
      {user._id === teacher.id && <CreateCourseWork />}
      <CourseWorkTable posts={posts} />
    </>
  );
};

export default CourseWork;
