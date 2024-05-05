import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Clear } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { FormikValues, useFormikContext } from "formik";

import utilsService from "../../../services/fileUpload";
import IMAGES from "../../../assets/themes/images/images";

import styles from "./styles.module.css";
import { useAppDispatch } from "../../../redux/store";
import { setLoadingAction } from "../../../redux/utils/actions";
import { logger } from "../../../utils/logger";
import { toast } from "react-toastify";
import Button from "../Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface FileUploadButtonProps {
  name: string;
  label?: string;
  index: number;
  multiple?: boolean;
}

const FileUploadButtonWithoutPreview: React.FC<FileUploadButtonProps> = ({
  name,
  label,
  index,
  multiple = false,
}) => {
  const { values, touched, errors, setFieldValue } = useFormikContext<FormikValues>();
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const getFileExtension = (link: string) => {
    const re = /(?:\.([^.]+))?$/;
    return re.exec(link)?.[1];
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    try {
      dispatch(setLoadingAction(true));
      const imageUrlGrid = await utilsService.upload(e.target.files);
      dispatch(setLoadingAction(false));
      let prevData = [...values[name]];
      let newData: { label: string; path: any }[] = [];

      if (multiple) {
        newData = [...imageUrlGrid?.data?.data]?.map((imageUrl, i) => ({
          label: `Document ${+prevData?.length + i + 1}`,
          path: imageUrl,
        }));
      } else {
        prevData[index] = {
          label,
          path: imageUrlGrid?.data?.data[0],
        };
      }

      setFieldValue(name, [...prevData, ...newData]);
      // cb?.()
    } catch (err: any) {
      toast.error(err.response.data.msg);
      dispatch(setLoadingAction(false));
    }
  };

  const handleFileDelete = async (reversedIndex: number) => {
    const originIndex = +values?.[name]?.length - 1 - reversedIndex;
    const data = values?.[name][originIndex];
    const prevData = [...values[name]];
    const filteredData = prevData.filter((_, i) => i !== originIndex);
    setFieldValue(name, filteredData);
    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
    try {
      await utilsService.deleteFile({ url: data.path });
    } catch (err) {
      logger.error("File Delete failed");
    }
  };

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    } else {
      alert("other");
    }
  };

  return (
    <Box className={styles.uploadContainer} style={{ minHeight: "50px" }}>
      {(!values?.[name][index] || multiple) && (
        <div style={{ margin: "20px 0" }}>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            className={styles.fileUploadInput}
            ref={inputRef}
            placeholder={"Upload file..."}
            name={name}
            onChange={handleFileUpload}
            multiple={multiple}
          />
          {/* <img src={IMAGES.Cloud} alt="" />
          <p>
            {values?.[name][index] && multiple
              ? "Add more files... "
              : "Drag and drop here & "}
            <small className={styles.textRed}>browse</small> (eg. JPG / PDF /
            JPEG)
          </p> */}
          <Button
            color="alert"
            type="button"
            className="mr-12"
            onClick={handleClick}
          >
            <ArrowUpwardIcon /> Upload
          </Button>
        </div>
      )}

      {values?.[name][index] &&
        [...values?.[name]]
          ?.filter((i) => i)
          ?.reverse()
          ?.map((_item: any, reversedIndex: number) => {
            return (
              <div
                style={{
                  position: "relative",
                  border: "1px solid rgba(36, 36, 36, 0.12)",
                  padding: "15px 0",
                  display: "inline-block",
                  width: `calc(50% - 10px)`,
                  margin: "5px 5px 0 0",
                }}
                key={_item?.label}
              >
                {/* <img
                src={
                  getFileExtension(_item.path) === "pdf"
                    ? IMAGES.Pdf
                    : _item.path
                }
                alt=""
                className={styles.img}
              /> */}
                <span style={{ margin: "15px" }}>
                  {_item.path?.split("patient/")?.[1] || ""}
                  <CheckIcon className={styles.checkIcon} />
                </span>

                <Clear
                  className={styles.closeIcon}
                  style={{ position: "absolute", right: "15px", top: '20px' }}
                  onClick={() => handleFileDelete(reversedIndex)}
                />
              </div>
            );
          })}

      {touched[name] && errors[name] && <p className="error mt-1 mb-1">{`${errors[name]}`}</p>}
    </Box>
  );
};

export default FileUploadButtonWithoutPreview;
