import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
// import Tooltip from '@mui/material/Tooltip';


export default function ColorTabs(Props) {
  const [value, setValue] = React.useState(Props.value);

  const handleChange = (newValue) => {
    // <Link to="/pendingStudents" />;
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Admitted" href="students" />
        <Tab value="two" label="REGISTER" href="addStudent" />
        <Tab value="three" label="Pending" href="pendingStudents" />
      </Tabs>
    </Box>
  );
}
