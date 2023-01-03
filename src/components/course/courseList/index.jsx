import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CourseList = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const navigate = useNavigate();
  const courseViewPage = useCallback(
    (id) => navigate("/courseView/"+id, { replace: true }),
    [navigate]
  );

  const columns = [
    { field: "courseCode", headerName: "course Code", flex: 0.5 },
    { field: "courseLevel", headerName: "Level" },
    {
      field: "courseName",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dateCreated",
      headerName: "date Created",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <Box>
      <Box
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
        <DataGrid
          rows={props.courses}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={(rows) => courseViewPage(rows.id)}
        />
      </Box>
    </Box>
  );
};

export default CourseList;
