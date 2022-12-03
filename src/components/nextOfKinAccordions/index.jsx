import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Box, Button, useTheme } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function NextOfKinAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
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
                  Country
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Kenya
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
                    Jeremysmalga@gmail.com
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
                  Phone
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    +25478689777
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
              <Box mt="-9px">
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
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
              <Box mt="-9px">
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
                  Country
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Kenya
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
                    Jeremysmalga@gmail.com
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
                  Phone
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    +25478689777
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
            <Box display="flex" gap="97px" ml="15px">
              <Box mt="-9px">
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
                  <ModeEditOutlineOutlinedIcon
                    fontSize="small"
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
              <Box mt="-9px">
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
                  Country
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Kenya
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
                    Jeremysmalga@gmail.com
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
                  Phone
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    +25478689777
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
      <Box m="15px">
        <Button color="secondary" variant="contained">
          ADD
        </Button>
      </Box>
    </Box>
  );
}
