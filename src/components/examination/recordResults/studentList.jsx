import React from "react";
import { Box, Button, useTheme, TextField, Typography } from "@mui/material";

export default function StudentList() {
  return (
    <Box display="flex" gap="250px">
      <Box mt='25px'>
        <Typography>Student Name</Typography>
      </Box>
      <Box width="100px">
        <TextField
          fullWidth
          variant="filled"
          label="Enter Marks"
          // onBlur={handleBlur}
          // onChange={handleChange}

          name="month"
          sx={{
            "& .Mui-focused": {
              color: "#f2f0f0 !important",
              input: {
                color: "#f2f0f0 !important",
              },
            },
            "& .Mui-focused.Mui-error": {
              color: "#f44336 !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
              borderBottom: "2px solid #0ba2de !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
              borderBottom: "2px solid #f5079e !important",
            },
            "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
              {
                borderBottom: "#f44336 !important",
              },
          }}
        />
      </Box>
    </Box>
  );
}
