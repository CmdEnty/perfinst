import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Form1 from '../studentForms/form1';
import Form2 from '../studentForms/form2';
import Form3 from '../studentForms/form3';
import ConfirmationForm from '../confirmationForm';

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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function StudentFormTab(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const handlePage = () => {
    // e.preventDefault();
    const newValue = value+1
    setPage(newValue);
    handleChangeIndex(newValue)
  };

    const handlePagePrev = () => {
    const newValue = value-1
    handleChangeIndex(newValue)
  };

    const handleChange = (e, newValue) => {
      e.preventDefault();
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 900, ml:5 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Basic Information" disabled={page < 1} {...a11yProps(1)} />
          <Tab label="Next Of Kin" disabled={page < 2}{...a11yProps(2)} />
          <Tab label="Comfirmation" disabled={page < 3}{...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Box display="flex" mr="10px">
              
              <Form1 handlePage={handlePage}  
                     student={props.student}
                    handleFormChange={props.handleFormChange}
                     />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <Box display="flex" mr="10px">
              <Form2 handlePage={handlePage}
                   handlePagePrev={handlePagePrev}
                   student={props.student}
                    handleFormChange={props.handleFormChange}
              />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <Box display="flex" mr="10px">
              <Form3 handlePage={handlePage}
                    handlePagePrev={handlePagePrev}
                    student={props.student}
                    handleFormChange={props.handleFormChange}
              />
            </Box>
        </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
            <Box display="flex" mr="10px">
              <ConfirmationForm handlePage={handlePage}
                    handlePagePrev={handlePagePrev}
                    student={props.student}
                    handleFormChange={props.handleFormChange}
              />
            </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
