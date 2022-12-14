import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SalaryHistoryList = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const salaryHistoryViewPage = useCallback(
    () => navigate("/salaryHistoryView", { replace: true }),
    [navigate]
  );

  const columns = [
    { field: "staffNo", headerName: "StaffNo", flex: 0.5 },
    { field: "dateCreated", headerName: "Full Names" },
    {
      field: "month",
      headerName: "Month",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "paymentMode",
      headerName: "PaymentMode",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "receiptNo",
      headerName: "Receipt No",
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
          rows={props.salaryHistry}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={salaryHistoryViewPage}
        />
      </Box>
    </Box>
  );
};

export default SalaryHistoryList;
