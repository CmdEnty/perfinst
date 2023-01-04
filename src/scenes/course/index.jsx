import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import CourseList from "../../components/course/courseList";
import AddCourseForm from "../../components/addCourseForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";
const Course = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [courses, setCourses] = React.useState([]);
  const queryClient = useQueryClient();

  const { isLoading, isError } = useQuery(["coursesList"], () =>
    axiosReq.get("/courses").then((res) => {
      queryClient.invalidateQueries(["searchedCourse"]);
      setCourses(res.data);
      return res.data;
    })
  );

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
          backgroundColor={colors.primary[400]}>
          <Typography textAlign="center" fontSize="20px" mt="20px">
            Add Course Form
          </Typography>
          <br />{" "}
          <Box
            backgroundColor={colors.primary[400]}
            width="350px"
            overflow="auto"
            height="500px">
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
            <CourseList courses={courses} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
