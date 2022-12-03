import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const DesignationForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [qualificationsFields, setQualificationsField] = useState([]);
  const [responsFields, setResponsField] = useState([]);
  const [dynamicQualField, setDynamicQualField] = useState(0);
  const [dynamicDescrField, setDynamicDescrField] = useState(0);
  const [fields, setFieldsField] = useState({});

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, { form1Submitted: 1 });
    props.handleFormChange(NewValues);
    props.handlePage();
  };

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    salary: yup.string().required("required"),
    description: yup.string().required("required"),
    qualifications: yup.string().required("required"),
  });

  const addQualField = (e, checkoutSchema) => {
    e.preventDefault();
    setDynamicQualField(dynamicQualField + 1);
    let val = `qualification_${dynamicQualField}`;

    setQualificationsField([
      ...qualificationsFields,
      { id: dynamicQualField, name: val },
    ]);

    setFieldsField([...fields, { dynamicQualField: "" }]);
  };

  const addDescrField = (e) => {
    e.preventDefault();
    setDynamicDescrField(dynamicDescrField + 1);
    let val = `responsibility_${dynamicDescrField}`;

    setResponsField([...responsFields, { id: dynamicDescrField, name: val }]);

    setFieldsField([...fields, { dynamicDescrField: "" }]);
  };

  return (
    <>
      <Box ml="10px" mt="15px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={Object.assign(initialValues, props.student, fields)}
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
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
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
                    ".Mui-focused": {
                      color: "#f2f0f0 !important",
                      input: {
                        color: "#f2f0f0 !important",
                      },
                    },
                    ".Mui-focused.Mui-error": {
                      color: "#f44336 !important",
                    },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                      {
                        borderBottom: "2px solid #0ba2de !important",
                      },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                      borderBottom: "2px solid #f5079e !important",
                    },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                      {
                        borderBottom: "#f44336 !important",
                      },
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Salary"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.salary}
                  name="salary"
                  error={!!touched.salary && !!errors.salary}
                  helperText={touched.salary && errors.salary}
                  sx={{
                    gridColumn: "span 2",
                    ".Mui-focused": {
                      color: "#f2f0f0 !important",
                      input: {
                        color: "#f2f0f0 !important",
                      },
                    },
                    ".Mui-focused.Mui-error": {
                      color: "#f44336 !important",
                    },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                      {
                        borderBottom: "2px solid #0ba2de !important",
                      },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                      borderBottom: "2px solid #f5079e !important",
                    },
                    ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                      {
                        borderBottom: "#f44336 !important",
                      },
                  }}
                />
                <Box display="flex" gap="21px">
                  <Box>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      multiline
                      label="Responsibilities"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      name="description"
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                      sx={{
                        "& .Mui-focused": {
                          color: "#f2f0f0 !important",
                          input: {
                            color: "#f2f0f0 !important",
                          },
                        },
                        ".Mui-focused.Mui-error": {
                          color: "#f44336 !important",
                        },
                        ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                          {
                            borderBottom: "2px solid #0ba2de !important",
                          },
                        ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
                          {
                            borderBottom: "2px solid #f5079e !important",
                          },
                        ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input":
                          {
                            color: "#f5079e !important",
                          },
                        ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                          {
                            borderBottom: "#f44336 !important",
                          },
                      }}
                    />
                    {responsFields.length > 0 &&
                      responsFields.map((responsField, index) => (
                        <Box mt="20px">
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
                              ".Mui-focused": {
                                color: "#f2f0f0 !important",
                                input: {
                                  color: "#f2f0f0 !important",
                                },
                              },
                              ".Mui-focused.Mui-error": {
                                color: "#f44336 !important",
                              },
                              ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                                {
                                  borderBottom: "2px solid #0ba2de !important",
                                },
                              ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
                                {
                                  borderBottom: "2px solid #f5079e !important",
                                },
                              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input":
                                {
                                  color: "#f5079e !important",
                                },
                              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                                {
                                  borderBottom: "#f44336 !important",
                                },
                            }}
                          />
                        </Box>
                      ))}
                    <Box display="flex" mt="20px" ml="188px">
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={addDescrField}
                      >
                        ADD
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      variant="filled"
                      multiline
                      type="text"
                      label="Qualifications"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.qualifications}
                      name="qualifications"
                      error={
                        !!touched.qualifications && !!errors.qualifications
                      }
                      helperText={
                        touched.qualifications && errors.qualifications
                      }
                      sx={{
                        ".Mui-focused": {
                          color: "#f2f0f0 !important",
                          input: {
                            color: "#f2f0f0 !important",
                          },
                        },
                        ".Mui-focused.Mui-error": {
                          color: "#f44336 !important",
                        },
                        ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                          {
                            borderBottom: "2px solid #0ba2de !important",
                          },
                        ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
                          {
                            borderBottom: "2px solid #f5079e !important",
                          },
                        ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input":
                          {
                            color: "#f5079e !important",
                          },
                        ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                          {
                            borderBottom: "#f44336 !important",
                          },
                      }}
                    />
                    {qualificationsFields.length > 0 &&
                      qualificationsFields.map((qualificationsField, index) => (
                        <Box mt="20px">
                          <TextField
                            key={qualificationsField.id}
                            fullWidth
                            variant="filled"
                            multiline
                            type="text"
                            label={qualificationsField.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values[qualificationsField.name]}
                            name={qualificationsField.name}
                            sx={{
                              ".Mui-focused": {
                                color: "#f2f0f0 !important",
                                input: {
                                  color: "#f2f0f0 !important",
                                },
                              },
                              ".Mui-focused.Mui-error": {
                                color: "#f44336 !important",
                              },
                              ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                                {
                                  borderBottom: "2px solid #0ba2de !important",
                                },
                              ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after":
                                {
                                  borderBottom: "2px solid #f5079e !important",
                                },
                              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input":
                                {
                                  color: "#f5079e !important",
                                },
                              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                                {
                                  borderBottom: "#f44336 !important",
                                },
                            }}
                          />
                        </Box>
                      ))}
                    <Box display="flex" mt="20px" ml="188px">
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={addQualField}
                      >
                        ADD
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" mt="50px">
                <Button type="submit" color="secondary" variant="contained">
                  SUBMIT
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

const initialValues = {
  title: "",
  salary: "",
  description: "",
  qualifications: "",
};

export default DesignationForm;
