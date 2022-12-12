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
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const UnitsPage = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "ICT" },
    { key: 1, label: "Computer Science" },
    { key: 2, label: "IT" },
    { key: 3, label: "CCNA" },
    { key: 4, label: "Multmedia" },
    { key: 5, label: "ICT" },
    { key: 6, label: "Computer Science" },
    { key: 7, label: "IT" },
    { key: 8, label: "CCNA" },
    { key: 9, label: "Multmedia" },
    { key: 10, label: "ICT" },
    { key: 11, label: "Computer Science" },
    { key: 12, label: "IT" },
    { key: 13, label: "CCNA" },
    { key: 14, label: "Multmedia" },
    { key: 15, label: "ICT" },
    { key: 16, label: "Computer Science" },
    { key: 17, label: "IT" },
    { key: 18, label: "CCNA" },
    { key: 19, label: "Multmedia" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const handleClick = (data) => {
      alert("You clicked the Chip.");
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
                        <Paper
                          sx={{
                            bgcolor: colors.primary[400],
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            listStyle: "none",
                            p: 0.5,
                            m: 0,
                          }}
                          component="ul"
                        >
                          {chipData.map((data) => {
                            let icon;

                            if (data.label === "React") {
                              icon = <TagFacesIcon />;
                            }

                            return (
                              <ListItem key={data.key}>
                                <Chip
                                  icon={icon}
                                  label={data.label}
                                  onClick={() => handleClick(data)}
                                  onDelete={
                                    data.label === "React"
                                      ? undefined
                                      : handleDelete(data)
                                  }
                                />
                              </ListItem>
                            );
                          })}
                        </Paper>
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
