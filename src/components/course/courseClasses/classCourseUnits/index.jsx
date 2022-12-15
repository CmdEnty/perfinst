import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
};

export default function ClassCourseUnitsList() {
  return (
    <List sx={style} component="div" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="unit 1" />
      </ListItem>
      <Divider variant="inset" />
      <ListItem>
        <ListItemText primary="unit 2" />
      </ListItem>
      <Divider variant="inset" light />
      <ListItem button>
        <ListItemText primary="unit 3" />
      </ListItem>
      <Divider variant="inset" light />
      <ListItem button>
        <ListItemText primary="unit 4" />
      </ListItem>
      <Divider variant="inset" light />
    </List>
  );
}
