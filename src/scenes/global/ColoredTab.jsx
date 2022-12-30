import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const styles = {
  minWidth: 90,
  fontSize: 13,
  "&:hover": {
    color: "#0ba2de",
  },
};

export default function AccountMenu(props) {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Register Student">
          <Link
            to="/addStudent"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "two" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography
              sx={styles}
              color={props.value === "two" ? "#0ba2de" : "#f1f1f1"}
              fontWeight={props.value === "two" ? "bold" : undefined}
            >
              REGISTRATION FORM
            </Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Online/Local Unadmitted Applicants">
          <Link
            to="/pendingStudents"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "three" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography
              sx={styles}
              color={props.value === "three" ? "#0ba2de" : "#f1f1f1"}
              fontWeight={props.value === "three" ? "bold" : undefined}
            >
              STUDENTS AWAITING ADMISSION
            </Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Admitted Students">
          <Link
            to="/students"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "one" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography
              sx={styles}
              color={props.value === "one" ? "#0ba2de" : "#f1f1f1"}
              fontWeight={props.value === "one" ? "bold" : undefined}
            >
              ADMITTED STUDENTS
            </Typography>
          </Link>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
