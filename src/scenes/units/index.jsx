import * as React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useState } from "react";
import AddUnitsForm from "../../components/addUnitsForm";

const UnitsPage = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="UNITS" subtitle="Add & View Units" />
      </Box>

      <Box display="flex" gap="20px">
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.primary[400]}
        >
          <Typography textAlign="center" fontSize="20px" mt="20px">
            Add Unit Form
          </Typography>
          <br />{" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="350px"
            overflow="auto"
            height="500px"
          >
            <AddUnitsForm />
          </Box>
        </Box>
        <Box>
          {" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="590px"
            height="600px"
          >
            <br />
            <Typography textAlign="center" fontSize="20px">
              List Of Units
            </Typography>
            <br />
            <Box width="550px" ml="20px" overflow="auto" height="500px">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{ bgcolor: colors.primary[400] }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box display="flex" gap="97px" ml="15px">
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Title
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          Computer Applications
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Code
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          CA21
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex" gap="115px">
                    <Box mt="-15px" ml="15px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Courses
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography
                          display="flex"
                          variant="h6"
                          color={colors.grey[200]}
                        >
                          1. Computer Science <br />
                          2. IT <br />
                          3. ICT <br />
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
                        Description
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
                        Lecturers
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          1. Mr John <br />
                          2. Mr Jeremy <br />
                          3. Mr Peter <br />
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{ bgcolor: colors.primary[400] }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box display="flex" gap="97px" ml="15px">
                    <Box mt="-5px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Title
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          Secretary
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                    <Box mt="-5px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Salary (Kshs)
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          25,000
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex" gap="115px">
                    <Box mt="-15px" ml="15px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Qualification
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography
                          display="flex"
                          variant="h6"
                          color={colors.grey[200]}
                        >
                          1. Above 25 years <br />
                          2. Atleast 2 years experience <br />
                          3. Kenyan Citizen <br />
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
                        Description
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
                        Responsibilities
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          1. Above 25 years <br />
                          2. Atleast 2 years experience <br />
                          3. Kenyan Citizen <br />
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{ bgcolor: colors.primary[400] }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box display="flex" gap="105px" ml="15px">
                    <Box mt="-5px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Title
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          Lecturer
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                    <Box mt="-5px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Salary (Kshs)
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          30,000
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex" gap="115px">
                    <Box mt="-15px" ml="15px">
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color={colors.blueAccent[700]}
                      >
                        Qualification
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography
                          display="flex"
                          variant="h6"
                          color={colors.grey[200]}
                        >
                          1. Above 25 years <br />
                          2. Atleast 2 years experience <br />
                          3. Kenyan Citizen <br />
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
                        Description
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
                        Responsibilities
                      </Typography>
                      <Box display="flex" gap="10px">
                        <Typography variant="h6" color={colors.grey[200]}>
                          1. Above 25 years <br />
                          2. Atleast 2 years experience <br />
                          3. Kenyan Citizen <br />
                        </Typography>
                        <ModeEditOutlineOutlinedIcon
                          fontSize="small"
                          color="secondary"
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UnitsPage;
