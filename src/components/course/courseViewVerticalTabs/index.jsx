import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

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

export default function CourseViewCustomizedTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: colors.primary[400] }}>
      <AppBar position="static" sx={{ bgcolor: colors.primary[400] }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="Departments"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 0 ? "bold !important" : undefined,
            }}
          />
          <Tab
            label="Classes/Units"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 1 ? "bold !important" : undefined,
            }}
          />
          <Tab
            label="Fee Structure"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 2 ? "bold !important" : undefined,
            }}
          />
          <Tab
            label="Students"
            {...a11yProps(3)}
            sx={{
              color: value === 3 ? "#0ba2de !important" : "#f1f1f1 !important",
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
          Departments
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Classes And Units
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Fee Structure
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Students
        </TabPanel>
      </Box>
    </Box>
  );
}
