import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import NextOfKinAccordions from "../nextOfKinAccordions";
import * as yup from "yup";
import ToggleEdit from "../../scenes/global/edibleField";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StudentViewTab(props) {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkoutSchema = yup.object().shape({
    surName: yup.string().required("required"),
    fastName: yup.string().required("required"),
    middleName: yup.string().required("required"),
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
    specialNeeds: yup.string().required("required"),
    idNumber: yup.string().required("required"),
  });

  return (
    <Box sx={{ width: "100%", mt: "-35px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example">
          <Tab
            label="Basic Info"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 0 ? "bold !important" : undefined,
            }}
          />
          <Tab
            label="Contact"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 1 ? "bold !important" : undefined,
            }}
          />
          <Tab
            label="Next Of Kin"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#0ba2de !important" : "#f1f1f1 !important",
              fontWeight: value === 2 ? "bold !important" : undefined,
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box display="flex" gap="97px" ml="-5px">
          <Box>
            <Box mt="-15px" ml="-20px">
              <ToggleEdit
                studes={props.studes}
                name="surName"
                type="text"
                checkoutSchema={checkoutSchema}
                label="SurName"
              />
              <ToggleEdit
                studes={props.studes}
                name="fastName"
                type="text"
                checkoutSchema={checkoutSchema}
                label="Fast Name"
              />
              <ToggleEdit
                studes={props.studes}
                name="middleName"
                type="text"
                checkoutSchema={checkoutSchema}
                label="Middle Name"
              />

              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}>
                Date Of Birth
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  {props.studes.dob}
                </Typography>
              </Box>
              <ToggleEdit
                studes={props.studes}
                name="idNumber"
                type="text"
                checkoutSchema={checkoutSchema}
                label="ID/PassPort"
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}>
                Gender
              </Typography>
              <Box display="flex" gap="10px">
                <Typography
                  variant="h6"
                  color={colors.grey[200]}
                  textTransform="capitalize">
                  {props.studes.sgender}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Box mt="-15px" ml="-20px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}>
                  County Of Birth
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography
                    variant="h6"
                    color={colors.grey[200]}
                    textTransform="capitalize">
                    {props.studes.placeOfBirth}
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}>
                  Marital Status
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography
                    variant="h6"
                    color={colors.grey[200]}
                    textTransform="capitalize">
                    {props.studes.maritalStatus}
                  </Typography>
                </Box>
                <ToggleEdit
                  studes={props.studes}
                  name="specialNeeds"
                  type="text"
                  checkoutSchema={checkoutSchema}
                  label="special Needs"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box>
          <Box mt="-15px" ml="-20px">
            <ToggleEdit
              studes={props.studes}
              name="phoneNumber"
              type="text"
              checkoutSchema={checkoutSchema}
              label="Phone Number"
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}>
              County
            </Typography>
            <Box display="flex" gap="10px">
              <Typography
                variant="h6"
                color={colors.grey[200]}
                textTransform="capitalize">
                {props.studes.county}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}>
              Sub County
            </Typography>
            <Box display="flex" gap="10px">
              <Typography
                variant="h6"
                color={colors.grey[200]}
                textTransform="capitalize">
                Changamwe
              </Typography>
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}>
              Location
            </Typography>
            <Box display="flex" gap="10px">
              <Typography
                variant="h6"
                color={colors.grey[200]}
                textTransform="capitalize">
                {props.studes.location}
              </Typography>
            </Box>
            <ToggleEdit
              studes={props.studes}
              name="email"
              type="text"
              checkoutSchema={checkoutSchema}
              label="Email"
            />
          </Box>
        </Box>
      </TabPanel>

      {/* next of kin */}

      <TabPanel value={value} index={2}>
        <Box>
          <Box mt="-20px" ml="-50px">
            <NextOfKinAccordions studes={props.studes} />
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
