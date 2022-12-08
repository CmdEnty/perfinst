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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const RecordExpForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
    const [value, setValue] = useState(dayjs("2022-04-07"));

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
  };

  //   months
  const months = [
    {
      value: 0,
      label: "January",
    },
    {
      value: 1,
      label: "February",
    },
    {
      value: 2,
      label: "March",
    },
    {
      value: 3,
      label: "April",
    },
    {
      value: 4,
      label: "May",
    },
    {
      value: 5,
      label: "June",
    },
    {
      value: 6,
      label: "July",
    },
    {
      value: 7,
      label: "August",
    },
    {
      value: 8,
      label: "September",
    },
    {
      value: 9,
      label: "October",
    },
    {
      value: 10,
      label: "November",
    },
    {
      value: 11,
      label: "December",
    },
  ];

  return (
    <>
      <Box ml="20px" mr="40px" mt="20px" width="250px">
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
                gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {" "}
                  <DatePicker
                    disableFuture
                    label="Date"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Amount Spent (Kshs)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.amount}
                  name="amount"
                  error={!!touched.amount && !!errors.amount}
                  helperText={touched.amount && errors.amount}
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
                  label="Spent For"
                  multiline
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.reason}
                  name="reason"
                  error={!!touched.reason && !!errors.reason}
                  helperText={touched.reason && errors.reason}
                  sx={{
                    gridColumn: "span 2",
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
                    ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after": {
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

                <FormControl
                  sx={{
                    ".css-w3lmqu-MuiFormLabel-root.Mui-focused": {
                      color: "#f2f0f0 !important",
                    },
                    ".css-1a9y42x-MuiButtonBase-root-MuiRadio-root.Mui-checked":
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
                    onChange={handleChange}
                    value={values.methodOfPayment}
                  >
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label="Cash"
                    />
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

                {values.methodOfPayment !== "" && (
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Enter The Receipt No (${values.methodOfPayment})`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.durationValue}
                    name="durationValue"
                    error={!!touched.durationValue && !!errors.durationValue}
                    helperText={touched.durationValue && errors.durationValue}
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
                      ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after":
                        {
                          borderBottom: "2px solid #f5079e !important",
                        },
                      ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                        {
                          borderBottom: "#f44336 !important",
                        },
                    }}
                  />
                )}
                {values.methodOfPayment !== "" && (
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Enter The Amount Paid (Kshs)`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.durationValue}
                    name="durationValue"
                    error={!!touched.durationValue && !!errors.durationValue}
                    helperText={touched.durationValue && errors.durationValue}
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
                      ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after":
                        {
                          borderBottom: "2px solid #f5079e !important",
                        },
                      ".css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
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
                  label="Description"
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
                    ".Mui-focused.Mui-error": {
                      color: "#f44336 !important",
                    },
                    ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:before":
                      {
                        borderBottom: "2px solid #0ba2de !important",
                      },
                    ".css-g7eipk-MuiInputBase-root-MuiFilledInput-root:after": {
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
              <Box display="flex" mt="20px">
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

export default RecordExpForm;
