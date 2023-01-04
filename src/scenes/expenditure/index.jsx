import * as React from "react";
import { Box, useTheme, Typography, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import ExpendHistoryList from "../../components/expendHistoryList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro";
import RecordExpForm from "../../components/recordExpForm";
import { useQuery } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";

const Expenditure = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState([null, null]);
  const [otherExpenditures, setOtherExpenditures] = useState([]);

   const { isLoading, isError } = useQuery(["otherExpendituresList"], () =>
     axiosReq.get("/otherExpenditure").then((res) => {
       setOtherExpenditures(res.data);
       return res.data;
     })
   );

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EXPENDITURE" subtitle="Record & Manage Expenditures" />
      </Box>

      <Box display="flex" gap="20px">
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.primary[400]}>
          <Typography textAlign="center" fontSize="20px" mt="20px">
            Record Expenditure Form
          </Typography>
          <br />{" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="310px"
            overflow="auto"
            height="700px">
            <Box ml="20px" mr="40px" mt="20px" width="250px"></Box>
            <RecordExpForm />
          </Box>
        </Box>
        <Box>
          {" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="630px"
            height="720px">
            <Card
              sx={{
                maxWidth: 550,
                ml: 5,

                backgroundColor: colors.primary[400],
                height: 180,
              }}>
              <CardContent>
                <Box display="flex" gap="50px" m="2px">
                  <Box>
                    {" "}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={colors.blueAccent[700]}>
                      Total Amount Spent (Kshs)
                    </Typography>
                    <Box display="flex" gap="10px">
                      <Typography variant="h6" color={colors.grey[200]}>
                        30000
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={colors.blueAccent[700]}>
                      FROM
                    </Typography>
                    <Box display="flex" gap="10px">
                      <Typography variant="h6" color={colors.grey[200]}>
                        Jan/2022
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={colors.blueAccent[700]}>
                      TO
                    </Typography>
                    <Box display="flex" gap="10px">
                      <Typography variant="h6" color={colors.grey[200]}>
                        Dec/2022
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box mt="10px">
                  <Typography textAlign="center" fontSize="15px" ml="-450px">
                    FILTER
                  </Typography>{" "}
                  <br />
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{
                      start: "FROM DATE",
                      end: "TO DATE",
                    }}>
                    <DesktopDateRangePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </CardContent>
            </Card>
            <br />
            <Typography textAlign="center" fontSize="20px">
              Expenditure Records
            </Typography>

            <ExpendHistoryList otherExpenditures={otherExpenditures} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Expenditure;
