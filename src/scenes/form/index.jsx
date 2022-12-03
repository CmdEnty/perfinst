import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import ColorRadioButtons from '../geography';
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedValue, setSelectedValue] = React.useState();
  const [selectedGender, setSelectedGender] = React.useState();

  const handleFormSubmit = (errors) => {
    const error = {...errors}
    alert(error.surName);
  };
  const valueGet = (val) => {
    setSelectedValue(val);
  }

    const valueGetGender = (val) => {
    setSelectedGender(val);
  }

  return (
    <>
    
    <Box m="30px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
     </Box>
    <Box m="100px">

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
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
              }}
            >
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
              // ".css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
              //   width: "100px !important"
              // },
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
              ".css-1rv476z-MuiInputBase-input-MuiFilledInput-input": {
                width: "100px !important"
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

              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
              /> */}
            </Box>
            <Box display="flex" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    </>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  // selectedValue: yup.string().required("You must select one the buttons"),
  surName: yup.string().required("required"),
  fastName: yup.string().required("required"),
  middleName: yup.string().required("required"),
  // selectedGender: yup.string().required("You must select one the buttons"),
  idNo: yup.string().required("required"),
  // nationality: yup.string().required("required"),
  // email: yup.string().email("invalid email").required("required"),
  // contact: yup
  //   .string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .required("required"),
  // address1: yup.string().required("required"),
  // address2: yup.string().required("required"),
});
const initialValues = {
  // selectedValue: "",
  surName: "",
  fastName: "",
  middleName: "",
  // selectedGender: "",
  idNo: "",
  // nationality: "",
};

export default Form;
