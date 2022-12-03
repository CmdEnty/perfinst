import {
  Box,
  Button,
  useTheme,
  Typography,
  Tooltip,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Header from "../../components/Header";
import CourseList from "../../components/course/courseList";
import { Link } from "react-router-dom";
const CourseView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Tooltip title="Back">
        <Link
          to="/course"
          style={{ textDecoration: "none", color: colors.grey[100] }}
        >
          <ArrowBackOutlinedIcon sx={{ fontSize: 30, mt: -4 }} />
        </Link>
      </Tooltip>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="COURSE VIEW" subtitle="Manage Course Details" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box display="flex" gap="20px">
        <Box>
          {" "}
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            width="350px"
            overflow="auto"
            height="500px"
          >
            <Typography textAlign="center" fontSize="20px" mt="20px">
              Add Course Form
            </Typography>
          </Box>
        </Box>
        <Box>
          {" "}
          <Box backgroundColor={colors.primary[400]} width="590px">
            <CourseList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseView;
