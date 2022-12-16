import React from "react";
import {
  Box,
  Button,
  useTheme,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../theme";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PrintIcon from "@mui/icons-material/Print";

export default function TransactionHistory() {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //   months

  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box>
        <Typography variant="h4">Fees Transaction History</Typography>
      </Box>
      <Box width="250px">
        <Autocomplete
          limitTags={1}
          id="checkboxes-tags-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{
            width: 300,
          }}
          renderInput={(params) => (
            <TextField
              color="secondary"
              multiline
              {...params}
              label="Search By Student Adm No."
              sx={{
                gridColumn: "span 2",
                "& .Mui-focused.Mui-error": {
                  color: "#f44336 !important",
                },
                "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root::before, .css-n88uca::before":
                  {
                    borderBottom: "2px solid #0ba2de !important",
                  },
                "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root::after, .css-n88uca::after":
                  {
                    borderBottom: "2px solid #f5079e !important",
                  },
                "& .Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input":
                  {
                    color: "#f5079e !important",
                  },
                "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                  {
                    borderBottom: "#f44336 !important",
                  },
              }}
            />
          )}
        />
      </Box>
      <Box maxHeight="500px" width="650px" overflow="auto">
        <Box backgroundColor={colors.primary[500]} width="610px">
          <Box
            width="600px"
            p="10px 10px 10px 0"
            display="flex"
            flexDirection="column"
            gap="10px"
          >
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
                  Year 1
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Total Terms: 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card
                  sx={{
                    maxWidth: 650,
                    // ml: 5,
                    mt: 1,
                    backgroundColor: colors.primary[600],
                    height: 220,
                  }}
                >
                  <CardContent>
                    <Typography color="secondary" textAlign="center">
                      Transaction Receipt Number 134256
                    </Typography>
                    <Box display="flex" gap="150px" m="2px">
                      <Box>
                        {" "}
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Paid For The Month Of
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            Nov/2022
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Amount Paid (Kshs)
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            10000
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Date Of Transaction
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            2/9/2022
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        {" "}
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Method Of Payment
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            M-pesa
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Transaction Completed By
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            Mrs Karanja
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={colors.blueAccent[700]}
                        >
                          Any Other Info
                        </Typography>
                        <Box display="flex" gap="10px">
                          <Typography variant="h6" color={colors.grey[200]}>
                            N/A
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      This Trasaction was recorded by Account: Admin on
                      29/Nov/2022
                    </Typography>
                    <Box mt="-10px" ml="460px">
                      <Tooltip title="REPRINT RECEIPT">
                        <IconButton>
                          <PrintIcon color="secondary" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
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
              <AccordionDetails></AccordionDetails>
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
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
