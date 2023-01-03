import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AccountMenu from "../global/ColoredTab";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";

const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [studes, setStudes] = React.useState([]);
  const navigate = useNavigate();
  const studentViewPage = useCallback(
    (id) => navigate("/studentView/" + id, { replace: true }),
    [navigate]
  );

  const { isLoading, isError } = useQuery(["students"], () =>
    axiosReq.get("/student").then((res) => {
      return setStudes([...res.data]);
    })
  );
  const columns = [
    { field: "surName", headerName: "SurName", flex: 0.5 },
    { field: "fastName", headerName: "Fast Name" },
    {
      field: "middleName",
      headerName: "Middle Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sgender",
      headerName: "Gender",
      // type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "snationality",
      headerName: "Nationality",
      flex: 1,
    },
    {
      field: "idNumber",
      headerName: "ID Number",
      flex: 1,
    },
    {
      field: "dob",
      headerName: "DOB",
      flex: 1,
    },
    // {
    //   field: "city",
    //   headerName: "City",
    //   flex: 1,
    // },
    // {
    //   field: "idNo",
    //   headerName: "ID Number",
    //   flex: 1,
    // },
  ];

  return (
    <Box m="20px">
      <Header title="STUDENTS" subtitle="List of Admitted Students" />
      <AccountMenu value="one" />
      <Box
        m="25px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}>
        <Typography color="#0ba2de" fontWeight="bold" fontSize="16px">
          LIST OF ADMITTED STUDENTS
        </Typography>
        <DataGrid
          rows={studes}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(rows) => studentViewPage(rows.id)}
        />
      </Box>
    </Box>
  );
};

export default Students;
