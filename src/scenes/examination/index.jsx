import * as React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Exams from "../../components/examination/exams";
import Grades from "../../components/examination/grades";
import RecordResults from "../../components/examination/recordResults";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Examinations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "admissionNo", headerName: "Admission Number" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "idNo",
      headerName: "ID Number",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="EXAMINATIONS"
        subtitle="Manage Exams, Timetable, Record Results & Print Report Forms"
      />
      <Box m="20px">
        <AppBar
          position="static"
          sx={{ bgcolor: colors.primary[400], width: 900, ml: 1 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="EXAMS"
              {...a11yProps(0)}
              sx={{
                color:
                  value === 0 ? "#0ba2de !important" : "#f1f1f1 !important",
                fontWeight: value === 0 ? "bold !important" : undefined,
              }}
            />

            <Tab
              label="GRADES/POINTS"
              {...a11yProps(1)}
              sx={{
                color:
                  value === 1 ? "#0ba2de !important" : "#f1f1f1 !important",
                fontWeight: value === 1 ? "bold !important" : undefined,
              }}
            />
            <Tab
              label="RECORD RESULTS"
              {...a11yProps(2)}
              sx={{
                color:
                  value === 2 ? "#0ba2de !important" : "#f1f1f1 !important",
                fontWeight: value === 2 ? "bold !important" : undefined,
              }}
            />
            <Tab
              label="MANAGE RESULTS/REPORT FORMS"
              {...a11yProps(3)}
              sx={{
                color:
                  value === 3 ? "#0ba2de !important" : "#f1f1f1 !important",
                fontWeight: value === 3 ? "bold !important" : undefined,
              }}
            />
          </Tabs>
        </AppBar>
        <Box
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box
              m="0 0 0 0"
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
              <Typography color="#0ba2de" fontWeight="bold" fontSize="17px">
                EXAMS
              </Typography>
              <Exams />
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box
              m="0 0 0 0"
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
              <Typography color="#0ba2de" fontWeight="bold" fontSize="17px">
                GRADES/POINTS
              </Typography>
              <Typography color="secondary" fontStyle="italic" fontSize="14px">
                NOTE: These Grades are used to generate End Term Exams FINAL RESULTS
                Report Form (AVERAGE OF CAT1, CAT2 & END TERM)
              </Typography>
              <Grades />
            </Box>
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box
              m="0 0 0 0"
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
              <Typography color="#0ba2de" fontWeight="bold" fontSize="17px">
                RECORD RESULTS
              </Typography>
              <RecordResults />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Box
              m="0 0 0 0"
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
              <Typography color="#0ba2de" fontWeight="bold" fontSize="17px">
                MANAGE RESULTS/REPORT FORMS
              </Typography>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Examinations;
