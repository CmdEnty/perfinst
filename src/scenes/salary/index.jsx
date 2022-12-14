import { Box, Button, useTheme, Typography, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import RecordSalaryForm from "../../components/salary/recordSalaryForm";
import SalaryHistoryList from "../../components/salary/salaryHistoryList";
import { useQuery } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";

const Salary = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [staffNo, setStaffNo] = useState();
  const [next, setNext] = useState(false);
  const [salaryHistry, setSalaryHistry] = useState([]);

  const { isLoading, isError } = useQuery(["salaryHistory"], () =>
    axiosReq.get("/salary").then((res) => {
      return setSalaryHistry(res.data);
    })
  );

  const staffSearch = (e) => {
    setStaffNo([e.target.value]);
  };

  const nextStep = () => {
    setNext(true);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SALARY" subtitle="Record & Manage Salary" />
      </Box>

      <Box display="flex" gap="20px">
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.primary[400]}>
          <Typography textAlign="center" fontSize="20px" mt="20px">
            Record Salary Form
          </Typography>
          <br />
          <Box
            backgroundColor={colors.primary[400]}
            maxWidth="350px"
            overflow="auto"
            maxHeight="600px">
            <Box ml="20px" mr="40px" mt="20px" width="250px">
              <TextField
                fullWidth
                variant="filled"
                type="search"
                label="Enter Staff/ID No"
                onChange={staffSearch}
                value={staffNo}
                name="nationality"
                sx={{
                  "& .Mui-focused": {
                    color: "#f5079e !important",
                    input: {
                      color: "#0ba2de !important",
                    },
                  },
                  "& .Mui-focused.Mui-error": {
                    color: "#f44336 !important",
                  },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root::before":
                    {
                      borderBottom: "2px solid #0ba2de !important",
                    },
                  "& .Mui-focused.css-u7c0k7-MuiInputBase-root-MuiFilledInput-root::after":
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
              {!next && (
                <Button onClick={nextStep}>
                  <Typography color="white">NEXT</Typography>
                </Button>
              )}
            </Box>
            {next && <RecordSalaryForm />}
          </Box>
        </Box>
        <Box>
          {" "}
          <Box backgroundColor={colors.primary[400]} width="630px">
            <br />
            <Typography textAlign="center" fontSize="20px">
              Salary Transaction Histry
            </Typography>
            <br />
            <SalaryHistoryList salaryHistry={salaryHistry}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Salary;
