import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const styles = {
  color: "#f1f1f1",
  minWidth: 90,
  "&:hover": {
    color: "#0ba2de",
  },
};

export default function AccountMenu(props) {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Admitted Students">
          <Link
            to="/students"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "one" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography sx={styles}>ADMITTED</Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Register Student">
          <Link
            to="/addStudent"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "two" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography sx={styles}>REGISTER</Typography>
          </Link>
        </Tooltip>
        <Tooltip title="Pending Students">
          <Link
            to="/pendingStudents"
            style={{
              textDecoration: "none",
              borderBottom:
                props.value === "three" ? "2px solid #f5079e" : undefined,
            }}
          >
            <Typography sx={styles}>PENDING</Typography>
          </Link>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
}
