import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosReq } from "../../../../axiosReq";

const AddClassesForm1 = ({ setClassesForm }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = useState(dayjs(""));
   const queryClient = useQueryClient();

   // Mutations
   const mutation = useMutation(
     (newClass) => {
       axiosReq.post("/intakeClass/addClass", newClass);
     },
     {
       onSuccess: () => {
         // Invalidate and refetch
          queryClient.invalidateQueries(["classesList"]);
       },
       onError: () => {
         return alert("oops something went wrong");
       },
     }
   );

  const handleFormSubmit = (values) => {
    const NewValues = Object.assign(values, { form1Submitted: 1 });
   
    mutation.mutate(values)
    // props.handleFormChange(NewValues);
    // props.handlePage();
    setClassesForm("form2");
  };

  return (
    <>
      <Box ml="20px" mr="40px" mt="20px" width="250px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {" "}
                  <DatePicker
                    disableFuture
                    label="Reporting Date"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={value}
                    onChange={(newValue) => {
                      values.reportingDate = newValue;
                      setValue(newValue);
                    }}
                    name="reportingDate"
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        variant="filled"
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
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
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
  description: yup.string().required("required"),
  title: yup.string().required("required"),
  reportingDate: yup.string().required("required"),
});

const initialValues = {
  description: "",
  title: "",
  reportingDate: "",
};

export default AddClassesForm1;
