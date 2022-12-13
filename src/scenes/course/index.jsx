import { Box, Button, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import CourseList from "../../components/course/courseList";
import AddCourseForm from "../../components/addCourseForm";

const Course = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="COURSE" subtitle="Add & View Course" />
      </Box>

      <Box display="flex" gap="20px">
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.primary[400]}
        >
          <Typography textAlign="center" fontSize="20px" mt="20px">
            Add Course Form
          </Typography>
          <br />{" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="350px"
            overflow="auto"
            height="500px"
          >
            <AddCourseForm />
          </Box>
        </Box>
        <Box>
          {" "}
          <Box backgroundColor={colors.primary[400]} width="590px">
            <br />
            <Typography textAlign="center" fontSize="20px">
              List Of Courses
            </Typography>
            <br />
            <CourseList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
