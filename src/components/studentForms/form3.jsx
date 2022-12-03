import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ColorRadioButtons from '../radio_btn';
const Form2 = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [btnChange, setBtnChange] = React.useState({p_selectedNationality: props.student.p_selectedNationality});

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, {form3Submitted: 1});
    props.handleFormChange(NewValues);
     props.handlePage();
  };

  const handleBtnChange = (event) => {
    let val = event.target.value;
    setBtnChange({...btnChange, p_selectedNationality : val});
  }

    const pagePrev = (values) => {
    props.handleFormChange(values);
    props.handlePagePrev();
  }

  const {p_selectedNationality} = btnChange

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
                label="Full Names"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
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
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.p_location}
                name="p_location"
                error={!!touched.p_location && !!errors.p_location}
                helperText={touched.p_location && errors.p_location}
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
                value={values.p_phone}
                name="p_phone"
                error={!!touched.p_phone && !!errors.p_phone}
                helperText={touched.p_phone && errors.p_phone}
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
                value={values.p_email}
                name="p_email"
                error={!!touched.p_email && !!errors.p_email}
                helperText={touched.p_email && errors.p_email}
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
                label="Relationship"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.relationShip}
                name="relationShip"
                error={!!touched.relationShip && !!errors.relationShip}
                helperText={touched.relationShip && errors.relationShip}
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
                name='p_selectedNationality'
                value={values.p_selectedNationality}
                onChange={(values.p_selectedNationality = p_selectedNationality,
                          p_selectedNationality === 'Kenya' ? (values.p_nationality="N/A", values.passportNumber="N/A"):
                          p_selectedNationality === 'Other' && values.p_nationality==="N/A" ? 
                          (values.p_nationality="", values.passportNumber=""):
                          p_selectedNationality === 'Other' ?  values.p_idNo="N/A":'',
                          p_selectedNationality === 'Kenya' && values.p_idNo==="N/A" ? 
                          values.p_idNo="":'')}
                title="Nationality"
                value1="Kenya"
                value2="Other"
                span1="Kenya"
                span2="Other"
                error={!!touched.p_selectedNationality && !!errors.p_selectedNationality}
                msg2={!p_selectedNationality && (touched.p_selectedNationality && errors.p_selectedNationality)}
                />
                </Box>

                {p_selectedNationality === 'Other' && (
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Please specify your Nationality"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.p_nationality}
                name="p_nationality"
                error={p_selectedNationality === 'Other' && (!!touched.p_nationality && !!errors.p_nationality)}
                helperText={touched.p_nationality && errors.p_nationality}
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
           
           {p_selectedNationality === 'Other' && (
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Passport Number/Alien ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passportNumber}
                name="passportNumber"
                error={p_selectedNationality === 'Other' && (!!touched.passportNumber && !!errors.passportNumber)}
                helperText={touched.passportNumber && errors.passportNumber}
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

                {p_selectedNationality === 'Kenya' && (
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.p_idNo}
                name="p_idNo"
                error={!!touched.p_idNo && !!errors.p_idNo}
                helperText={touched.p_idNo && errors.p_idNo}
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
              <Button type="submit" color="secondary" variant="contained" onClick={() => pagePrev(values)}>
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
  fullName: yup.string().required("required"),
  p_location: yup.string().required("required"),
  p_phone: yup.string().required("required"),
  p_email: yup.string().required("required"),
  relationShip: yup.string().required("required"),
  p_selectedNationality: yup.string().required("You must select one the buttons"),
  passportNumber: yup.string().required("required"),
  p_nationality: yup.string().required("required"),
  p_idNo: yup.string().required("required"),
});
const initialValues = {
  fullName: "",
  p_location: "",
  p_phone: "",
  p_email: "",
  relationShip: "",
  p_selectedNationality: "",
  passportNumber: "",
  p_nationality: "",
  p_idNo: "",
};

export default Form2;
