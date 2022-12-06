import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import InboxList from "../../components/emails/inbox";
// import React, { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

//   const navigate = useNavigate();
//   const studentViewPage = useCallback(
//     () => navigate("/studentView", { replace: true }),
//     [navigate]
//   );

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Emails() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Header title="MAIL BOX" subtitle="Manage All Emails" />

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: colors.primary[400],
          display: "flex",
          height: 524,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", color: 'white' }}
        >
          <Tab label="Inbox" {...a11yProps(0)} />
          <Tab label="Sent" {...a11yProps(1)} />
          <Tab label="Draft" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Inbox
          <InboxList/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Sent
        </TabPanel>
        <TabPanel value={value} index={2}>
          Draft
        </TabPanel>
      </Box>
    </Box>
  );
}
