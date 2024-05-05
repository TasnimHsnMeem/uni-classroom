import React from "react";
import { Box } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { FormikValues, useFormikContext } from "formik";

import utilsService from "../../../services/fileUpload";
import IMAGES from "../../../assets/themes/images/images";

import styles from "./styles.module.css";
import { useAppDispatch } from "../../../redux/store";
import { setLoadingAction } from "../../../redux/utils/actions";
import { logger } from "../../../utils/logger";
import { toast } from "react-toastify";
// import { assetUrl } from "../../modules/patient/patientDialog/ImageAsset";

interface FileUploadButtonProps {
  name: string;
  label?: string;
  index: number;
  multiple?: boolean;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  name,
  label,
  index,
  multiple = false,
}) => {
  const { values, errors, setFieldValue } =
    useFormikContext<FormikValues>();

    console.log(errors)

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
    try {
      await utilsService.deleteFile({ url: data.path });
    } catch (err) {
      logger.error("File Delete failed");
    }
  };

  return (
    <Box className={styles.uploadContainer}>
      {(!values?.[name][index] || multiple) && (
        <label className={styles.fileUploadButton}>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            className={styles.fileUploadInput}
            placeholder={"Upload file..."}
            name={name}
            onChange={handleFileUpload}
            multiple={multiple}
          />
          <img src={IMAGES.Cloud} alt="" />
          <p>
            {values?.[name][index] && multiple
              ? "Add more files... "
              : "Drag and drop here & "}
            <small className={styles.textRed}>browse</small> (eg. JPG/PDF/JPEG)
          </p>
        </label>
      )}
      {values?.[name][index] &&
        [...values?.[name]]
          .reverse()
          .map((_item: any, reversedIndex: number) => (
            <div style={{ position: "relative"}} key={_item?.label}>
              <img
                src={
                  getFileExtension(_item.path) === "pdf"
                    ? IMAGES.Pdf : ''
                    // : assetUrl(_item.path)
                }
                alt=""
                className={styles.img}
              />
              <Clear
                className={styles.closeIcon}
                onClick={() => handleFileDelete(reversedIndex)}
              />
            </div>
          ))}

      {errors[name] && (
        <p className="error mt-1 mb-1">{`${errors[name]}`}</p>
      )}
    </Box>
  );
};

export default FileUploadButton;
