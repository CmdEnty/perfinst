import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ColorRadioButtons from '../radio_btn';
const Form2 = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [btnChange, setBtnChange] = React.useState({selectedSpecialNeeds: props.student.selectedSpecialNeeds});

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, {form2Submitted: 1});
    props.handleFormChange(NewValues);
     props.handlePage();
  };

  const handleBtnChange = (event) => {
    let val = event.target.value;
    setBtnChange({...btnChange, selectedSpecialNeeds : val});
  }

  const pagePrev = (values) => {
    props.handleFormChange(values);
    props.handlePagePrev();
  }

  const {selectedSpecialNeeds} = btnChange
  return (
    <>
    <Box m="100px" mt="15px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={Object.assign(initialValues, props.student)}
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
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Course code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.course}
                name="course"
                error={!!touched.course && !!errors.course}
                helperText={touched.course && errors.course}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                  input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              }
             }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date Of Birth"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.DOB}
                name="DOB"
                error={!!touched.DOB && !!errors.DOB}
                helperText={touched.DOB && errors.DOB}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
               input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Place Of Birth"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.placeOfBirth}
                name="placeOfBirth"
                error={!!touched.placeOfBirth && !!errors.placeOfBirth}
                helperText={touched.placeOfBirth && errors.placeOfBirth}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />


                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="County (where he/she stays)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.county}
                name="county"
                error={!!touched.county && !!errors.county}
                helperText={touched.county && errors.county}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                  input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              }
             }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
               input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email (optional)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />


                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Marital Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maritalStatus}
                name="maritalStatus"
                error={!!touched.maritalStatus && !!errors.maritalStatus}
                helperText={touched.maritalStatus && errors.maritalStatus}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />

              <Box sx={{ gridColumn: "span 7" }}
                >
                  
                <ColorRadioButtons
                handleBtnChange={handleBtnChange}
                btnChange={btnChange}
                name='selectedSpecialNeeds'
                value={values.selectedSpecialNeeds}
                onChange={(values.selectedSpecialNeeds = selectedSpecialNeeds,
                          selectedSpecialNeeds === 'No' ? values.specialNeeds="N/A":
                          selectedSpecialNeeds === 'Yes' && values.specialNeeds==="N/A" ? 
                          values.nationality="":'')}
                title="Do you have any special needs?"
                value1="No"
                value2="Yes"
                span1="No"
                span2="Yes"
                error={!!touched.selectedSpecialNeeds && !!errors.selectedSpecialNeeds}
                msg3={!selectedSpecialNeeds && (touched.selectedSpecialNeeds && errors.selectedSpecialNeeds)}
                />
                </Box>

                {selectedSpecialNeeds === 'Yes' && (
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Please specify your Special Needs"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.specialNeeds}
                name="specialNeeds"
                error={selectedSpecialNeeds === 'Yes' && (!!touched.specialNeeds && !!errors.specialNeeds)}
                helperText={touched.specialNeeds && errors.specialNeeds}
                sx={{ gridColumn: "span 2", ".Mui-focused": {
                color: "#f5079e !important",
                 input: {
                  color: "#0ba2de !important"
                }
              },
              ".Mui-focused.Mui-error": {
                color: "#f44336 !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                borderBottom: "2px solid #0ba2de !important"
              },
                ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                borderBottom: "2px solid #f5079e !important"
              },
              ".Mui-error.css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                color: "#f5079e !important",
              },
              ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after": {
                borderBottom: "#f44336 !important"
              } }}
              />
                )}

            </Box>
            <Box display="flex" mt="50px" gap="450px">
              <Button color="secondary" variant="contained" onClick={() => pagePrev(values)}>
                PREVIOUS
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                NEXT
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  course: yup.string().required("required"),
  placeOfBirth: yup.string().required("required"),
  DOB: yup.string().required("required"),
  county: yup.string().required("required"),
  location: yup.string().required("required"),
  phone: yup.string().required("required"),
  maritalStatus: yup.string().required("required"),
  selectedSpecialNeeds: yup.string().required("You must select one the buttons"),
  specialNeeds: yup.string().required("required"),
});
const initialValues = {
  selectedSpecialNeeds: "",
  course: "",
  placeOfBirth: "",
  DOB: "",
  county: "",
  location: "",
  phone: "",
  email: "",
  maritalStatus: "",
  specialNeeds: "",
};

export default Form2;
