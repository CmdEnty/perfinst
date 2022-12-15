import * as React from "react";
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

export default function ToggleEdit(props) {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const [editMode, setEditMode] = React.useState(false);
  const colors = tokens(theme.palette.mode);

  const { checkoutSchema, name, type, label, editable } = props;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleFormSubmit = (values) => {
    // const NewValues = Object.assign(values, { form1Submitted: 1 });
    // props.handleFormChange(NewValues);
    // props.handlePage();
    alert("submitted");
    setEditMode(!editMode);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" color={colors.blueAccent[700]}>
        {label}
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={props.state_data}
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
              // mt="2px"
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            ></Box>
            {!editMode ? (
              <Box>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    {props.state_data[name]}
                  </Typography>
                  {editable !== false && (
                    <Tooltip title="Edit">
                      <ModeEditOutlineOutlinedIcon
                        fontSize="small"
                        color="secondary"
                        sx={{ cursor: "pointer" }}
                        onClick={toggleEditMode}
                      />
                    </Tooltip>
                  )}
                </Box>
              </Box>
            ) : (
              <Box display="flex" gap="10px">
                <TextField
                  fullWidth
                  variant="filled"
                  type={type}
                  label={label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[name]}
                  name={name}
                  error={!!touched[name] && !!errors[name]}
                  helperText={touched[name] && errors[name]}
                  sx={{
                    gridColumn: "span 2",
                    "& .Mui-focused": {
                      color: "#f5079e !important",
                      input: {
                        color: "#0ba2de !important",
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

                <Box>
                  <Tooltip title="Cancel Edit">
                    <CancelPresentationOutlinedIcon
                      fontSize="small"
                      color="secondary"
                      sx={{ cursor: "pointer" }}
                      onClick={() => (
                        ((values[name] = props.state_data[name]),
                        (errors[name] = "")),
                        setEditMode(!editMode)
                      )}
                    />
                  </Tooltip>

                  <Button type="submit">
                    <Tooltip title="Save">
                      <DoneOutlinedIcon
                        fontSize="small"
                        color="secondary"
                        sx={{ cursor: "pointer", ml: "-45px" }}
                      />
                    </Tooltip>
                  </Button>
                </Box>
              </Box>
            )}
          </form>
        )}
      </Formik>
    </Box>
  );
}
