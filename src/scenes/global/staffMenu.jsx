import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export default function StaffMenu(props) {
  const styles = {
    fontSize: 17,
    minWidth: 90,
    "&:hover": {
      color: "#0ba2de",
    },
  };
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
        <Tooltip title="Register Staff">
          <Link
            to="/addStaff"
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
              STAFF REGISTRATION FORM
            </Typography>
          </Link>
        </Tooltip>
        <Tooltip title="List Of Active Staffs">
          <Link
            to="/staff"
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
              STAFFS LIST
            </Typography>
          </Link>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
