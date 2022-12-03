import { Typography, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataContacts } from "../../../data/mockData";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const CourseList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "CourseId", flex: 0.5 },
    { field: "admissionNo", headerName: "Level" },
    {
      field: "name",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Duration",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "accessLevel",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { view } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[600]}
            borderRadius="4px"
          >
            <Link to="/courseView" style={{ textDecoration: "none" }}>
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                VIEW
              </Typography>
            </Link>
          </Box>
        );
      },
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
        />
      </Box>
    </Box>
  );
};

export default CourseList;
