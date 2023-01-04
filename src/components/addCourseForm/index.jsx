import * as React from "react";
import { Box, Button, TextField, Tooltip } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import AddCourseDialog from "../dialogs/addCourseConfirm";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";

const AddCourseForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [responsFields, setResponsField] = useState([]);
  const [courseData, setCourseData] = useState();
  const [dynamicDescrField, setDynamicDescrField] = useState(0);
  const [fields, setFieldsField] = useState({});
  const [open, setOpen] = useState(false);
  const [searchedCourses, setSearchedCourses] = useState([]);

  const { isLoading, data } = useQuery(["searchedCourse"], () =>
    axiosReq
      .get("/courses")
      .then((res) => {
        return setSearchedCourses(res.data);
      })
      .catch((err) => {
        return err;
      })
  );

  const handleFormSubmit = (values) => {
    console.log(values);
    setCourseData(values);
    setOpen(true);
  };
  // const addQualField = (e, checkoutSchema) => {
  //   e.preventDefault();
  //   setDynamicQualField(dynamicQualField + 1);
  //   let val = `qualification_${dynamicQualField}`;

  //   setQualificationsField([
  //     ...qualificationsFields,
  //     { id: dynamicQualField, name: val },
  //   ]);

  //   setFieldsField([...fields, { dynamicQualField: "" }]);
  // };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const courses = [...searchedCourses];

  const addDescrField = (e) => {
    e.preventDefault();
    setDynamicDescrField(dynamicDescrField + 1);
    let val = `qualification_${dynamicDescrField + 2}`;

    setResponsField([...responsFields, { id: dynamicDescrField, name: val }]);

    setFieldsField([...fields, { dynamicDescrField: "" }]);
  };

  return (
    <>
      <Box ml="20px" mr="40px" mt="20px" width="250px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={Object.assign(initialValues, fields)}
          validationSchema={checkoutSchema}>
          {({
            resetForm,
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              {open && (
                <AddCourseDialog
                  courseData={courseData}
                  courses={props.courses}
                  setCourses={props.setCourses}
                  setOpen={setOpen}
                  open={open}
                  resetForm={resetForm}
                />
              )}
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Code"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.code}
                  name="code"
                  error={!!touched.code && !!errors.code}
                  helperText={touched.code && errors.code}
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

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  error={!!touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
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

                <Autocomplete
                  limitTags={5}
                  id="checkboxes-tags-demo"
                  options={courses}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.courseCode}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.courseName}
                    </li>
                  )}
                  style={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField
                      // multiline
                      {...params}
                      label="Search Course field"
                      placeholder="Course Field"
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
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Level"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.level}
                  name="level"
                  error={!!touched.level && !!errors.level}
                  helperText={touched.level && errors.level}
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
                <FormControl
                  sx={{
                    "& .css-w3lmqu-MuiFormLabel-root.Mui-focused": {
                      color: "#f2f0f0 !important",
                    },
                    "& .css-1a9y42x-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#0ba2de !important" },
                  }}
                  error={!!touched.duration && !!errors.duration}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Duration
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="duration"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.duration}>
                    <FormControlLabel
                      value="months"
                      control={<Radio />}
                      label="Months"
                    />
                    <FormControlLabel
                      value="years"
                      control={<Radio />}
                      label="Years"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {touched.duration && errors.duration}
                  </FormHelperText>
                </FormControl>

                {values.duration !== "" && (
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label={`Enter The Value (${values.duration})`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.durationValue}
                    name="durationValue"
                    error={!!touched.durationValue && !!errors.durationValue}
                    helperText={touched.durationValue && errors.durationValue}
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
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  multiline
                  label="Qualification"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.qualification}
                  name="qualification"
                  error={!!touched.qualification && !!errors.qualification}
                  helperText={touched.qualification && errors.qualification}
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
                    "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                      {
                        borderBottom: "2px solid #0ba2de !important",
                      },
                    "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
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
                {responsFields.length > 0 &&
                  responsFields.map((responsField, index) => (
                    <TextField
                      key={responsField.id}
                      fullWidth
                      variant="filled"
                      multiline
                      type="text"
                      label={responsField.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[responsField.name]}
                      name={responsField.name}
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
                        "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                          {
                            borderBottom: "2px solid #0ba2de !important",
                          },
                        "& .css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
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
                  ))}
                <Box display="flex" mt="-55px" ml="260px">
                  <iconButton onClick={addDescrField}>
                    <Tooltip title="Add Qualification">
                      <Add cursor="pointer" />
                    </Tooltip>
                  </iconButton>
                </Box>
              </Box>
              <Box display="flex">
                <Button type="submit" color="secondary" variant="contained">
                  SUBMIT
                </Button>
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
  code: yup.string().required("required"),
  title: yup.string().required("required"),
  level: yup.string().required("required"),
  duration: yup.string().required("Select one of the buttons above"),
  durationValue: yup.string().required("Required"),
});

const initialValues = {
  code: "",
  title: "",
  level: "",
  duration: "",
  durationValue: "",
  qualification: "",
};

export default AddCourseForm;
