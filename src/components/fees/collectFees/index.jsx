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
import dayjs from "dayjs";
import MpesaForm from "./mpesa";
import BankForm from "./bank";

const CollectFeesForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = useState(dayjs(""));
  const [method, setMethod] = useState("");

  const handleFormSubmit = (values) => {
    // const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
    alert("submitted");
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
                <FormControl
                  sx={{
                    gridColumn: "span 8",
                    "& .css-w3lmqu-MuiFormLabel-root.Mui-focused": {
                      color: "#f2f0f0 !important",
                    },
                    "& .css-1a9y42x-MuiButtonBase-root-MuiRadio-root.Mui-checked":
                      { color: "#0ba2de !important" },
                  }}
                  error={!!touched.duration && !!errors.duration}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Method Of Payment
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="methodOfPayment"
                    onBlur={handleBlur}
                    onChange={(setMethod(values.methodOfPayment), handleChange)}
                    value={values.methodOfPayment}
                  >
                    <FormControlLabel
                      value="mpesa"
                      control={<Radio />}
                      label="M-pesa"
                    />
                    <FormControlLabel
                      value="bank"
                      control={<Radio />}
                      label="Bank"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {touched.methodOfPayment && errors.methodOfPayment}
                  </FormHelperText>
                </FormControl>

                <TextField
                  fullWidth
                  disabled={values.methodOfPayment === ""}
                  variant="filled"
                  type="text"
                  label="Student Admissin No"
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
                  disabled
                  variant="filled"
                  type="text"
                  label="Full name"
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
                  disabled
                  variant="filled"
                  type="text"
                  multiline
                  label="Course"
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
                <TextField
                  fullWidth
                  disabled
                  variant="filled"
                  type="text"
                  multiline
                  label="Fee Balance"
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
              </Box>
              <Box display="flex" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  CONTINUE
                </Button>
              </Box>
              <br />
            </form>
          )}
        </Formik>
        {method === "mpesa" && <MpesaForm />}
        {method === "bank" && <BankForm />}
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

export default CollectFeesForm;
