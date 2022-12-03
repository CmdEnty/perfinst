import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Header from "../../components/Header";
import DesignationModal from "../../components/designationModal";
import { useState } from "react";

export default function DesignationAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

   const [student, setStudent] = useState({
     title: "",
     salary: "",
     description: "",
     qualifications: "",
   });

   const handleFormChange = (values) => {
     setStudent({ ...student, ...values });
   };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 1, ml: 5 }}
      >
        <Header
          title="DESIGNATION"
          subtitle="Add, Edit and Manage Staff Designation"
        />
      </Box>
      <Box overflow="auto" sx={{ width: 750, height: 700, mt: 1, ml: 15 }}>
        <Box ml="680px">
            <DesignationModal student={student}/>
        </Box>
        <br />
        <Box>
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
                      Secretary
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
                    Salary (Kshs)
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      20,000
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
    </>
  );
}
