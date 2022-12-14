import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function SentList() {
  const [checked, setChecked] = React.useState([0]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const studentViewPage = useCallback(
    () => navigate("/studentView", { replace: true }),
    [navigate]
  );

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: 800, bgcolor: colors.primary[400] }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <Typography edge="end" aria-label="comments">
                12/Nov/2022
              </Typography>
            }
            disablePadding
          >
            <ListItemIcon onClick={handleToggle(value)}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemButton
              role={undefined}
              onClick={() => alert("clicked")}
              dense
            >
              <ListItemText
                id={labelId}
                primary={
                  <Typography width="150px" noWrap>
                    To: John Mwangangioooopp
                  </Typography>
                }
              />
              <ListItemText
                id={labelId}
                sx={{ pl: 15, pr: 8 }}
                secondary={
                  <Typography noWrap>
                    nnnnnnnnnnnnnnnnnnnmmkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmm
                    mmmmmmmnnnnnnnnnnnnnnnnnnn item
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
