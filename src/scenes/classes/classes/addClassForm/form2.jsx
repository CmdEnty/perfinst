import * as React from "react";
import { Box, Button, TextField, Tooltip } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

const AddClassesForm2 = ({ setClassesForm }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
  };

  return (
    <>
      <Box ml="20px" mr="40px" mt="20px" width="250px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <FormControl
                  sx={{
                    gridColumn: "span 2",
                    "& .css-w3lmqu-MuiFormLabel-root.Mui-focused": {
                      color: "#f2f0f0 !important",
                    },
                    "& .css-1a9y42x-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#0ba2de !important" },
                  }}
                  error={!!touched.courses && !!errors.courses}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Add Courses to this Class..
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="courses"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.courses}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All Courses"
                    />
                    <FormControlLabel
                      value="specify"
                      control={<Radio />}
                      label="Specify Courses"
                    />
                    <FormControlLabel
                      value="skip"
                      control={<Radio />}
                      label="Skip I will Add Later"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {touched.courses && errors.courses}
                  </FormHelperText>
                </FormControl>

                {values.courses === "specify" && (
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Please search a course by its code"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.coursesField}
                    name="coursesField"
                    error={!!touched.coursesField && !!errors.coursesField}
                    helperText={touched.coursesField && errors.coursesField}
                    sx={{
                      mt: -1,
                      gridColumn: "span 2",
                      "& .Mui-focused": {
                        color: "#f2f0f0 !important",
                        input: {
                          color: "#f2f0f0 !important",
                        },
                      },
                      "& .Mui-focused.Mui-error": {
                        color: "#f44336 !important",
                      },
                      "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                        {
                          borderBottom: "2px solid #0ba2de !important",
                        },
                      "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after":
                        {
                          borderBottom: "2px solid #f5079e !important",
                        },
                      "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                        {
                          borderBottom: "#f44336 !important",
                        },
                    }}
                  />
                )}
              </Box>
              <Box display="flex" mt="20px">
                {values.courses === "skip" ? (
                  <Button
                    onClick={() => setClassesForm("form1")}
                    color="secondary"
                    variant="contained"
                  >
                    SKIP
                  </Button>
                ) : (
                  <Button type="submit" color="secondary" variant="contained">
                    SUBMIT
                  </Button>
                )}
              </Box>
              <br />
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  courses: yup.string().required("Select one of the buttons above"),
  coursesField: yup.string().required("Required"),
});

const initialValues = {
  courses: "",
  coursesField: "",
};

export default AddClassesForm2;
