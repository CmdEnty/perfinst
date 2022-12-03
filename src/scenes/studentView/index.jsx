import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import StudentViewTab from "../../components/studentViewTab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Tooltip from "@mui/material/Tooltip";


const StudentView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Tooltip title="Back">
        <Link
          to="/students"
          style={{ textDecoration: "none", color: colors.grey[100] }}
        >
          <ArrowBackOutlinedIcon sx={{ fontSize: 30, mt: -4 }} />
        </Link>
      </Tooltip>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="STUDENT VIEW"
          subtitle="Edit and Manage Student Information"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="1px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="-5px"
          >
            <img
              alt="profile-user"
              width="150px"
              height="100px"
              src={`../../assets/user.png`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="50px"
        >
          <Box mt="-50px" ml="5px">
            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
              Mr John Jeremy
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              Mombasa, Kenya
            </Typography>
          </Box>
          <Box display="flex" mt="70px" gap="10px">
            <Button color="secondary" variant="contained">
              Send Email
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              Release
            </Button>
            <Button type="submit" color="secondary" variant="contained">
              <Typography>Delete</Typography>
            </Button>
          </Box>
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
                Course
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
                  Level
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Diploma
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Code
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    IT
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Title
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    Information Technology
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Duration
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    2 years
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.blueAccent[700]}
                >
                  Reporting Date
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="h6" color={colors.grey[200]}>
                    20/10/2022
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
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <StudentViewTab />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentView;
