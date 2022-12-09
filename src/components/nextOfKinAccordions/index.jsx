import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import ToggleEdit from "../../scenes/global/edibleField";

export default function NextOfKinAccordions() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState(0);
  const [state_data, setState_data] = useState({
    selectedValue: "",
    form1Submitted: "",
    surName: "John",
    fastName: "Mwangi",
    middleName: "Njoroge",
    selectedGender: "",
    idNo: "N/A",
    selectedNationality: "",
    nationality: "",
    specialNeeds: "N/A",
    phone: "0712345678",
    email: "N/A",
  });

  const checkoutSchema = yup.object().shape({
    email: yup.string().required("required"),
    phone: yup.string().required("required"),
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box overflow="auto" sx={{ width: 600, height: 320 }}>
      <Box mt="-18px">
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
              <Box mt="8px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Full Names
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Jeremy Smalga
                  </Typography>
                </Box>
              </Box>
              <Box mt="8px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Relationship
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Parent
                  </Typography>
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
                  Country
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Kenya
                  </Typography>
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
                </Box>
              </Box>
              <Box mt="-15px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  ID/Passport
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    3457889767
                  </Typography>
                </Box>
                <ToggleEdit
                  state_data={state_data}
                  name="email"
                  type="text"
                  checkoutSchema={checkoutSchema}
                  label="Email"
                />
                <ToggleEdit
                  state_data={state_data}
                  name="phone"
                  type="text"
                  checkoutSchema={checkoutSchema}
                  label="Phone Number"
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box m="15px">
        <Button color="secondary" variant="contained">
          ADD
        </Button>
      </Box>
    </Box>
  );
}
