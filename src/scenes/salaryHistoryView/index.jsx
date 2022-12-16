import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Tooltip from "@mui/material/Tooltip";
import SalaryHistoryList from "../../components/salary/salaryHistoryList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PrintIcon from "@mui/icons-material/Print";

const SalaryHistoryView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Tooltip title="Back">
        <Link
          to="/salary"
          style={{ textDecoration: "none", color: colors.grey[100] }}
        >
          <ArrowBackOutlinedIcon sx={{ fontSize: 30, mt: -4 }} />
        </Link>
      </Tooltip>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="SALARY HISTORY"
          subtitle="View Salary Payment History For A Staff"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="240px"
        gap="1px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="17px"
          >
            <img
              alt="profile-user"
              width="190px"
              height="140px"
              src={`../../assets/user.png`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box mt="20px" ml="100px">
            <Tooltip title="View More Details">
              <Link
                target="_blank"
                to="/staffView"
                style={{ textDecoration: "none", color: colors.grey[100] }}
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Mr John Jeremy
                </Typography>
              </Link>
            </Tooltip>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              Mombasa, Kenya
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 8" backgroundColor={colors.primary[400]}>
          <Card
            sx={{
              maxWidth: 550,
              ml: 5,
              mt: 1,
              backgroundColor: colors.primary[600],
              height: 220,
            }}
          >
            <CardContent>
              <Typography color="secondary" textAlign="center">
                Transaction Receipt Number 134256
              </Typography>
              <Box display="flex" gap="150px" m="2px">
                <Box>
                  {" "}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Paid For The Month Of
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      Nov/2022
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Amount Paid (Kshs)
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      10000
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Date Of Transaction
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      2/9/2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Method Of Payment
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      M-pesa
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Transaction Completed By
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      Mrs Karanja
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color={colors.blueAccent[700]}
                  >
                    Any Other Info
                  </Typography>
                  <Box display="flex" gap="10px">
                    <Typography variant="h6" color={colors.grey[200]}>
                      N/A
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                This Trasaction was recorded by Account: Admin on 29/Nov/2022
              </Typography>
              <Box mt="-10px" ml="460px">
                <Tooltip title="REPRINT RECEIPT">
                  <IconButton>
                    <PrintIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ width: 260, ml: -1 }}>
              <Typography
                variant="h5"
                fontWeight="Bold"
                color={colors.grey[100]}
              >
                Basic Info
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  ml: 5,
                }}
              ></Typography>
            </Box>
          </Box>
          <Box height="250px" m="10px 0 0 0">
            <Box>
              <Box ml="30px">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Staff Number
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    617168
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  ID Number
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    1228819
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Designation
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Secretary
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Last Paid
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    2/9/2022
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Salary Balance (Kshs)
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    25000
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box textAlign="center" mt="10px">
            <Typography variant="h5" fontWeight="600">
              Jeremy's Salary Transaction History
            </Typography>
          </Box>
          <Box mt="10px" p="0 10px">
            <SalaryHistoryList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SalaryHistoryView;
