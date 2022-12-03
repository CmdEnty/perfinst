import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ColorRadioButtons from '../radio_btn';
import { useState } from "react";

const Form1 = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [btnChange, setBtnChange] = useState({selectedValue: props.student.selectedValue,
  selectedGender: props.student.selectedGender,
  selectedNationality: props.student.selectedNationality,
  });
  
  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, {form1Submitted: 1});
    props.handleFormChange(NewValues);
     props.handlePage();
  };


  const handleBtnChange = (event) => {
    let val = event.target.value;
      
    if (val === 'Mr' || val === 'Ms') {
      setBtnChange({...btnChange, selectedValue : val});
    }
    if (val === 'Male' || val === 'Female') {
      setBtnChange({...btnChange, selectedGender : val});
    }
    if (val === 'Kenya' || val === 'Other') {
      setBtnChange({...btnChange, selectedNationality : val});
    }
  }
const {selectedValue, selectedGender, selectedNationality} =btnChange
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
                <Box sx={{ gridColumn: "span 7" }}
                >
                <ColorRadioButtons
                handleBtnChange={handleBtnChange}
                btnChange={btnChange}
                name='selectedValue'
                value={values.selectedValue}
                onBlur={handleBlur}
                onChange={(values.selectedValue = selectedValue)}
                title="Title"
                value1="Mr"
                value2="Ms"
                span1="Mr"
                span2="Ms."
                error={!!touched.selectedValue && !!errors.selectedValue}
                msg={!selectedValue && (touched.selectedValue && errors.selectedValue)}
                />
                </Box>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.surName}
                name="surName"
                error={!!touched.surName && !!errors.surName}
                helperText={touched.surName && errors.surName}
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
                label="Fast Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fastName}
                name="fastName"
                error={!!touched.fastName && !!errors.fastName}
                helperText={touched.fastName && errors.fastName}
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
                label="Middle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.middleName}
                name="middleName"
                error={!!touched.middleName && !!errors.middleName}
                helperText={touched.middleName && errors.middleName}
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

              <Box sx={{ gridColumn: "span 7" }}>
                <ColorRadioButtons
                handleBtnChange={handleBtnChange}
                btnChange={btnChange}
                name='selectedGender'
                value={values.selectedGender}
                onChange={(values.selectedGender = selectedGender)}
                title="Gender"
                value1="Male"
                value2="Female"
                span1="Male"
                span2="Female"
                error={!!touched.selectedGender && !!errors.selectedGender}
                msg1={!selectedGender && (touched.selectedGender && errors.selectedGender)}
                />
                </Box>

               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.idNo}
                name="idNo"
                error={!!touched.idNo && !!errors.idNo}
                helperText={touched.idNo && errors.idNo}
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
                name='selectedNationality'
                value={values.selectedNationality}
                onChange={(values.selectedNationality = selectedNationality,
                          selectedNationality === 'Kenya' ? values.nationality="N/A":
                          selectedNationality === 'Other' && values.nationality==="N/A" ? 
                          values.nationality="":'')}
                title="Nationality"
                value1="Kenya"
                value2="Other"
                span1="Kenya"
                span2="Other"
                error={!!touched.selectedNationality && !!errors.selectedNationality}
                msg2={!selectedNationality && (touched.selectedNationality && errors.selectedNationality)}
                />
                </Box>

                {selectedNationality === 'Other' && (
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Please specify your Nationality"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nationality}
                name="nationality"
                error={selectedNationality === 'Other' && (!!touched.nationality && !!errors.nationality)}
                helperText={touched.nationality && errors.nationality}
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
            <Box display="flex" mt="50px">
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
  selectedValue: yup.string().required("You must select one the buttons"),
  surName: yup.string().required("required"),
  fastName: yup.string().required("required"),
  middleName: yup.string().required("required"),
  selectedGender: yup.string().required("You must select one the buttons"),
  idNo: yup.string().required("required"),
  selectedNationality: yup.string().required("You must select one the buttons"),
  nationality: yup.string().required("required"),
});
const initialValues = {
  selectedValue: "",
  surName: "",
  fastName: "",
  middleName: "",
  selectedGender: "",
  idNo: "",
  selectedNationality: "",
  nationality: "",
};

export default Form1;
