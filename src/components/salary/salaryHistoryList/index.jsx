import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataContacts } from "../../../data/mockData";
import { useTheme } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SalaryHistoryList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const salaryHistoryViewPage = useCallback(
    () => navigate("/salaryHistoryView", { replace: true }),
    [navigate]
  );

  const columns = [
    { field: "id", headerName: "ID No", flex: 0.5 },
    { field: "admissionNo", headerName: "Staff No" },
    {
      field: "name",
      headerName: "Full Names",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Month",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Receipt No",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "idNo",
      headerName: "Amount",
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
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={salaryHistoryViewPage}
        />
      </Box>
    </Box>
  );
};

export default SalaryHistoryList;
