import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ExpendHistoryList = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const salaryHistoryViewPage = useCallback(
    () => navigate("/expendHistoryView", { replace: true }),
    [navigate]
  );

  const columns = [
    { field: "amount", headerName: "Amount", flex: 0.5 },
    { field: "spentFor", headerName: "Spent For" },
    {
      field: "methodOfPayment",
      headerName: "MethodOfPayment",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "receiptNo",
      headerName: "ReceiptNo",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "recipientPhone",
      headerName: "RecipientPhone",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "dateSpent",
      headerName: "DateSpent",
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
          rows={props.otherExpenditures}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={salaryHistoryViewPage}
        />
      </Box>
    </Box>
  );
};

export default ExpendHistoryList;
