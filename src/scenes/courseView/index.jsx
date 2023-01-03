import React from "react";
import { Box, useTheme, Typography, Tooltip } from "@mui/material";
import { tokens } from "../../theme";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import CourseViewCustomizedTabs from "../../components/course/courseViewVerticalTabs";
import CourseDetails from "../../components/course/courseViewDetails";
import { useQuery } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";


const CourseView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [studes, setStudes] = React.useState([]);

  const cid = useLocation().pathname.split("/")[2];
  const { isLoading } = useQuery(["courseDetails"], () =>
    axiosReq.get("/courses/courseView/" + cid).then((res) => {
      return setStudes(...res.data);
    })
  );

  return (
    <Box m="20px">
      <Tooltip title="Back">
        <Link
          to="/course"
          style={{ textDecoration: "none", color: colors.grey[100] }}>
          <ArrowBackOutlinedIcon sx={{ fontSize: 30, mt: -4 }} />
        </Link>
      </Tooltip>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="COURSE VIEW" subtitle="Manage Course Details" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="5px">
        <Box gridColumn="span 4">
          {" "}
          <Box
            backgroundColor={colors.primary[400]}
            alignItems="center"
            justifyContent="center"
            overflow="auto"
            height="500px">
            <Typography textAlign="center" fontSize="20px" mt="20px">
              Course Details
            </Typography>
            <CourseDetails studes={studes} />
          </Box>
        </Box>
        <Box gridColumn="span 8">
          {" "}
          <Box backgroundColor={colors.primary[400]}>
            <CourseViewCustomizedTabs studes={studes} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseView;
