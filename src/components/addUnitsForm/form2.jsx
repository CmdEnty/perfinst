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
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";

const AddUnitsForm2 = ({ setUnitsForm }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },]

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
                    "& .css-w3lmqu-MuiFormLabel-root.Mui-focused, .css-7fdilt":
                      {
                        color: "#f2f0f0 !important",
                      },
                    "& .css-1a9y42x-MuiButtonBase-root-MuiRadio-root.Mui-checked, .css-4pno3p.Mui-checked":
                      { color: "#0ba2de !important" },
                  }}
                  error={!!touched.courses && !!errors.courses}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Add this unit to..
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
                  <Autocomplete
                    multiple
                    limitTags={5}
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    disableCloseOnSelect
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
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Course"
                        placeholder="Search Course"
                        sx={{
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
                          "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before, .css-n88uca::before":
                            {
                              borderBottom: "2px solid #0ba2de !important",
                            },
                          "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after, .css-n88uca::after":
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
                )}
              </Box>
              <Box display="flex" mt="20px">
                {values.courses === "skip" ? (
                  <Button
                    onClick={() => setUnitsForm("form1")}
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

export default AddUnitsForm2;
