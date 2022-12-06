import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tokens } from "../../theme";
import { Box, Button, Typography, useTheme } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import NextOfKinAccordions from "../nextOfKinAccordions";
import * as yup from "yup";
import ToggleEdit from "../../scenes/faq";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StudentViewTab() {
  const [value, setValue] = useState(0);
  const [state_data, setState_data] = useState({
    selectedValue: "",
    form1Submitted: "",
    surName: "Joh",
    fastName: "Mwangi",
    middleName: "Njoroge",
    selectedGender: "",
    idNo: "",
    selectedNationality: "",
    nationality: "",
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkoutSchema = yup.object().shape({
    // selectedValue: yup.string().required("You must select one the buttons"),
    surName: yup.string().required("required"),
    fastName: yup.string().required("required"),
    middleName: yup.string().required("required"),
    // selectedGender: yup.string().required("You must select one the buttons"),
    // idNo: yup.string().required("required"),
    // selectedNationality: yup
    //   .string()
    //   .required("You must select one the buttons"),
    // nationality: yup.string().required("required"),
  });

  return (
    <Box sx={{ width: "100%", mt: "-35px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example"
        >
          <Tab
            label="Basic Info"
            {...a11yProps(0)}
            // sx={{ color: "white !important" }}
          />
          <Tab
            label="Contact"
            {...a11yProps(1)}
            // sx={{ color: "white !important" }}
          />
          <Tab
            label="Next Of Kin"
            {...a11yProps(2)}
            // sx={{ color: "white !important" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box display="flex" gap="97px" ml="-5px">
          <Box>
            <Box mt="-15px" ml="-20px">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Surname
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Jeremy
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Fast Name
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  John
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <ToggleEdit
                state_data={state_data}
                name="middleName"
                type="text"
                checkoutSchema={checkoutSchema}
                label="Middle Name"
              />

              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Date Of Birth
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  04/05/1990
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                ID/Passport No
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  N/A
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.blueAccent[700]}
              >
                Gender
              </Typography>
              <Box display="flex" gap="10px">
                <Typography variant="h6" color={colors.grey[200]}>
                  Male
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  fontSize="small"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Box mt="-15px" ml="-20px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  County Of Birth
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Mombasa
                  </Typography>
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Location
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Chaani
                  </Typography>
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Marital Status
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Single
                  </Typography>
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Special Need
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    N/A
                  </Typography>
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box>
          <Box mt="-15px" ml="-20px">
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}
            >
              Phone
            </Typography>
            <Box display="flex" gap="10px">
              <Typography variant="h6" color={colors.grey[200]}>
                +254725689909
              </Typography>
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}
            >
              County
            </Typography>
            <Box display="flex" gap="10px">
              <Typography variant="h6" color={colors.grey[200]}>
                Mombasa
              </Typography>
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}
            >
              Sub County
            </Typography>
            <Box display="flex" gap="10px">
              <Typography variant="h6" color={colors.grey[200]}>
                Changamwe
              </Typography>
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}
            >
              Location
            </Typography>
            <Box display="flex" gap="10px">
              <Typography variant="h6" color={colors.grey[200]}>
                Chaani
              </Typography>
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.blueAccent[700]}
            >
              Email
            </Typography>
            <Box display="flex" gap="10px">
              <Typography variant="h6" color={colors.grey[200]}>
                N/A
              </Typography>
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      </TabPanel>

      {/* next of kin */}

      <TabPanel value={value} index={2}>
        <Box>
          <Box mt="-20px" ml="-50px">
            <NextOfKinAccordions />
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
