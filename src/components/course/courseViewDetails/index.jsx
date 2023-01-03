import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import ToggleEdit from "../../../scenes/global/edibleField";
import * as yup from "yup";
import { useState } from "react";

export default function CourseDetails(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
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
        alignItems="center">
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
            }}></Typography>
        </Box>
      </Box>
      <Box height="250px" m="10px 0 0 0">
        <Box ml="35px" display="flex" flexDirection="column" gap="20px">
          <ToggleEdit
            studes={props.studes}
            name="field"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Field"
          />
          <ToggleEdit
            studes={props.studes}
            name="courseCode"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Code"
          />
          <ToggleEdit
            studes={props.studes}
            name="courseName"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Name"
          />

          <ToggleEdit
            studes={props.studes}
            name="courseLevel"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Level"
          />
          <ToggleEdit
            studes={props.studes}
            name="period"
            type="text"
            checkoutSchema={checkoutSchema}
            label="Duration"
          />
          <ToggleEdit
            studes={props.studes}
            name="dateCreated"
            type="text"
            editable={false}
            checkoutSchema={checkoutSchema}
            label="Date Created"
          />
        </Box>
      </Box>
    </>
  );
}
