import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

import UserTableActionIcons from "./UserTableActionIcons";

import userService from "../../../../services/user";

import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import { IUserTableData, IUserTableHeadCell } from "../../../../types/user/userTable";
import { logger } from "../../../../utils/logger";

import { toast } from "react-toastify";
import styles from "./../styles/styles.module.scss";

const headCells: readonly IUserTableHeadCell[] = [
  // {
  //   id: "id",
  //   numeric: false,
  //   label: "ID",
  // },
  {
    id: "name",
    numeric: true,
    label: "Name",
  },
  {
    id: "email",
    numeric: true,
    label: "Email",
  },
  {
    id: "contact",
    numeric: true,
    label: "Contact",
  },
  {
    id: "createdAt",
    numeric: true,
    label: "Created At",
  },
  {
    id: "role",
    numeric: true,
    label: "Role",
  },
  {
    id: "action",
    numeric: true,
    label: "Action",
  },
];

export default function UserListTable() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize] = useState(10);
  const [gridData, setGridData] = useState<{data: IUserTableData[], result: number}>({
    data: [],
    result: 0,
  });

  const dispatch = useAppDispatch();

  const getPaginationData = async (newPageNo: number, newPageSize: number) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await userService.get(newPageNo, newPageSize);
      dispatch(setLoadingAction(false));
      return { data: [...res?.data?.data], result: res?.data?.result };
    } catch (err) {
      dispatch(setLoadingAction(false));
      logger.error(err);
      return { data: [], result: 0 };
    }
  };

  const getPrevPage = async () => {
    const paginationData = await getPaginationData(pageNo - 1, pageSize);
    setGridData(paginationData);
    setPageNo((prev) => prev - 1);
  };

  const getNextPage = async () => {
    const paginationData = await getPaginationData(pageNo + 1, pageSize);
    setGridData(paginationData);
    setPageNo((prev) => prev + 1);
  };

  const handleDelete = async (id: string) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await userService.delete(id);
      toast.success("Success");
      const paginationData = await getPaginationData(0, pageSize);
      setGridData(paginationData);
      dispatch(setLoadingAction(false));

    } catch (error: any) {
      dispatch(setLoadingAction(false));
      toast.error(error.response.data.msg);

    }
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoadingAction(true));
        const res = await userService.get(0, 10);
        dispatch(setLoadingAction(false));
        const paginationData = {
          data: [...res.data.data],
          result: res?.data?.result,
        };
        setGridData(paginationData);
        dispatch(setLoadingAction(false));
      } catch {
        dispatch(setLoadingAction(false));
      }
    };

    getData();
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell, i) => (
                  <TableCell
                    key={i}
                    align={headCell.id === "action" ? "right" : "left"}
                  >
                    <b className={styles.tableHead}>{headCell.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {gridData?.data?.length > 0 &&
                gridData?.data?.map((item, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={item.id}
                    >
                      {/* <TableCell component="th" scope="row">
                        <span style={{ color: "#da3923" }}>
                          {item.id}
                        </span>
                      </TableCell> */}
                      <TableCell align="left">{item.name.firstName + " " + item.name.lastName}</TableCell>
                      <TableCell align="left">{item.email}</TableCell>
                      <TableCell align="left">{item.phoneNumber}</TableCell>
                      <TableCell align="left">
                        {new Date().toISOString().substring(0, 10)}
                      </TableCell>
                      <TableCell align="left">{item?.role.replaceAll("_"," ")}</TableCell>

                      <TableCell align="right">
                        <UserTableActionIcons item={item} handleDelete={handleDelete} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Paper elevation={0} className={styles.patientTableBtnStyle}>
          <Button
            type="button"
            className={styles.buttonStyle}
            onClick={getPrevPage}
            disabled={pageNo === 0}
          >
            Previous
          </Button>
          <span>
            {pageNo * pageSize + 1}-{pageNo * pageSize + gridData?.data?.length}{" "}
            of {gridData?.result}
          </span>
          <Button
            type="button"
            disabled={(pageNo + 1) * pageSize > gridData?.result}
            className={styles.buttonStyle}
            onClick={getNextPage}
          >
            Next
          </Button>
        </Paper> */}
      </Paper>
      {/* {open && <PatientDialog open={open} setOpen={setOpen} />} */}
    </Box>
  );
}
