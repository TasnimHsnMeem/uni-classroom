import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import courseService from "../../../../services/course";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

const JoinClass = (props: Props) => {
  const dispatch = useAppDispatch();
  const {id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoadingAction(true));
        const res = await courseService.joinClass(id as string);
        dispatch(setLoadingAction(false));
        toast.success("Joined class successfully");
        navigate('/course');
      } catch {
        dispatch(setLoadingAction(false));
        toast.error("Failed to join class");
        navigate('/course');
      }
    };
    getData()
  }, []);
  
  return <div>JoinClass</div>;
};

export default JoinClass;
