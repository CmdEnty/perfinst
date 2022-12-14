import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosReq } from "../../../axiosReq";

const RecordSalaryForm = (props) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
    const queryClient = useQueryClient();

    // Mutations
    const mutation = useMutation(
      (newSalary) => {
        axiosReq.post("/salary/addSalary", newSalary);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["salaryHistory"]);
        },
        onError: () => {
          return alert("oops something went wrong");
        },
      }
    );

  const handleFormSubmit = (values) => {

    mutation.mutate(values)

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
          validationSchema={checkoutSchema}>
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
                }}>
                <TextField
                  fullWidth
                  disabled
                  variant="filled"
                  type="text"
                  label="Full Names"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullNames}
                  name="fullNames"
                  error={!!touched.fullNames && !!errors.fullNames}
                  helperText={touched.fullNames && errors.fullNames}
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
                  label="Designation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.designation}
                  name="designation"
                  error={!!touched.designation && !!errors.designation}
                  helperText={touched.designation && errors.designation}
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
                  select
                  label="Select Month"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.month}
                  name="month"
                  SelectProps={{
                    native: true,
                  }}
                  error={!!touched.month && !!errors.month}
                  helperText={touched.month && errors.month}
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
                  }}>
                  <option></option>
                  {months.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
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
                    Method Of Payment
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="methodOfPayment"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.methodOfPayment}>
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
                    value={values.receiptNo}
                    name="receiptNo"
                    error={!!touched.receiptNo && !!errors.receiptNo}
                    helperText={touched.receiptNo && errors.receiptNo}
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
                {values.methodOfPayment !== "" && (
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label={`Enter The Amount Paid (Kshs)`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amount}
                    name="amount"
                    error={!!touched.amount && !!errors.amount}
                    helperText={touched.amount && errors.amount}
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
  month: yup.string().required("required"),
  receiptNo: yup.string().required("required"),
  month: yup.string().required("required"),
  methodOfPayment: yup.string().required("Select one of the buttons above"),
  amount: yup.string().required("Required"),
  // description: yup.string().required("Required"),
});

const initialValues = {
  staffNo: "",
  fullNames: "",
  designation: "",
  month: "",
  receiptNo: "",
  methodOfPayment: "",
  amount: "",
  description: "",
};

export default RecordSalaryForm;
