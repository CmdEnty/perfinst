import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import ToggleEdit from "../../../scenes/global/edibleField";
import * as yup from "yup";
import { useState } from "react";

export default function CourseDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [state_data, setState_data] = useState({
    field: "ICT",
    code: "IT",
    title: "Diploma In Information Technology",
    level: "Diploma",
    duration: "3 years",
    doc: "3/4/2020",
  });

  //  const handleChange = (event, newValue) => {
  //    setValue(newValue);
  //  };

  const checkoutSchema = yup.object().shape({
    // selectedValue: yup.string().required("You must select one the buttons"),
    surName: yup.string().required("required"),
    fastName: yup.string().required("required"),
    middleName: yup.string().required("required"),
    email: yup.string().required("required"),
    phone: yup.string().required("required"),
    specialNeeds: yup.string().required("required"),
    idNo: yup.string().required("required"),
    // selectedGender: yup.string().required("You must select one the buttons"),
    // idNo: yup.string().required("required"),
    // selectedNationality: yup
    //   .string()
    //   .required("You must select one the buttons"),
    // nationality: yup.string().required("required"),
  });
  return (
    <>
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ width: 300, ml: -1 }}>
          <Typography variant="h5" fontWeight="Bold" color={colors.grey[100]}>
            Basic Informations
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              ml: 13,
            }}
          ></Typography>
        </Box>
      </Box>
      <Box height="250px" m="10px 0 0 0">
        <Box ml="35px" display="flex" flexDirection="column" gap="20px">
          <ToggleEdit
            state_data={state_data}
            name="field"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Field"
          />
          <ToggleEdit
            state_data={state_data}
            name="code"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Code"
          />
          <ToggleEdit
            state_data={state_data}
            name="title"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Title"
          />

          <ToggleEdit
            state_data={state_data}
            name="level"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Level"
          />
          <ToggleEdit
            state_data={state_data}
            name="duration"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Duration"
          />
          <ToggleEdit
            state_data={state_data}
            name="doc"
            type="text"
            editable = {false}
            checkoutSchema={checkoutSchema}
            label="Date Created"
          />
        </Box>
      </Box>
    </>
  );
}
