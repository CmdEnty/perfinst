import React from "react";
import { Box, Button, useTheme, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClassCourseStudentList from "./classCourseStudentList";
import { tokens } from "../../../theme";
import ClassCourseUnitsList from "./classCourseUnits";

export default function CourseViewClasses() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //   months
  const months = [
    {
      value: 0,
      label: "2022/Sep/Int",
    },
    {
      value: 1,
      label: "2022/Jan/Int",
    },
    {
      value: 2,
      label: "2022/May/Int",
    },
  ];
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box width="250px">
        <TextField
          fullWidth
          variant="filled"
          select
          label="Select Class"
          // onBlur={handleBlur}
          // onChange={handleChange}

          name="month"
          SelectProps={{
            native: true,
          }}
          sx={{
            "& .Mui-focused": {
              color: "#f2f0f0 !important",
              input: {
                color: "#f2f0f0 !important",
              },
            },
            "& .Mui-focused.Mui-error": {
              color: "#f44336 !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
              borderBottom: "2px solid #0ba2de !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
              borderBottom: "2px solid #f5079e !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
              {
                borderBottom: "#f44336 !important",
              },
          }}
        >
          <option value="ALL">ALL</option>
          {months.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>
      <Box maxHeight="500px" width="550px" overflow="auto">
        <Box backgroundColor={colors.primary[500]} width="530px">
          <Box width="530px" p="10px 10px 10px 10px">
            {" "}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ bgcolor: colors.primary[500] }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  2022/Sep/Int
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Status: Active
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ bgcolor: colors.primary[500] }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Units
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Total: 6
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ClassCourseUnitsList />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ bgcolor: colors.primary[500] }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Students
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Total: 60
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ClassCourseStudentList />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
