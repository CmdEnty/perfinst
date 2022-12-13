import * as React from "react";
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import dayjs from "dayjs";

const MpesaForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = useState(dayjs(""));
  const [processing, setProcessing] = useState(false);

  const handleFormSubmit = (values) => {
    // const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
    alert("submitted");
  };

  const processPayment = () => {
    setProcessing(true);
  };

  return (
    <>
      <Box ml="20px" mr="40px" mt="20px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={Object.assign(initialValues)}
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
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <Box sx={{ gridColumn: "span 8" }}>
                  <Typography>For Mpesa Verification ONLY</Typography>
                </Box>

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="M-pesa Transaction No."
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
                <Box sx={{ gridColumn: "span 6" }}>
                  <Button type="submit" color="secondary" variant="contained">
                    VERIFY
                  </Button>
                </Box>
                <Box sx={{ gridColumn: "span 8" }}>
                  <Typography>Process Mpesa Online Payment</Typography>
                </Box>

                <TextField
                  fullWidth
                  disabled={processing}
                  variant="filled"
                  type="text"
                  label="Mpesa Phone Number"
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

                <TextField
                  fullWidth
                  disabled={processing}
                  variant="filled"
                  type="number"
                  multiline
                  label="Amount (Kshs)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
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
                <Box sx={{ gridColumn: "span 2" }}>
                  {processing ? (
                    <Button
                      onClick={processPayment}
                      color="secondary"
                      variant="contained"
                    >
                      PAID
                    </Button>
                  ) : (
                    <Button
                      onClick={processPayment}
                      color="secondary"
                      variant="contained"
                    >
                      PROCESS PAYMENT
                    </Button>
                  )}
                </Box>
              </Box>
              <Box display="flex" mt="20px"></Box>
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
  month: yup.string().required("required"),
  methodOfPayment: yup.string().required("Select one of the buttons above"),
  durationValue: yup.string().required("Required"),
});

const initialValues = {
  code: "",
  title: "",
  month: "",
  methodOfPayment: "",
  durationValue: "",
};

export default MpesaForm;
