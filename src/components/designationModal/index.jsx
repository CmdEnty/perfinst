import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { autocompleteClasses, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DesignationForm from "../designationForm";
// import { width } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 610,
  height: 460,
  border: "1px solid #0ba2de",
  boxShadow: 14,
  p: 4,
  overflow: "auto",
};

export default function DesignationModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: "14px",
          fontWeight: "bold",
          "&:hover": {
            bordrBottoem: 1,
            borderColor: "red",
            backgroundColor: colors.greenAccent[500],
          },
        }}
      >
        ADD
      </Button>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} bgcolor={colors.primary[400]}>
          <Box>
            <Button
              onClick={handleClose}
              sx={{
                color: colors.grey[100],
                fontSize: 20,
                fontWeight: "bold",
                ml: 62,
                mt: -5,
                "&:hover": {
                  color: colors.greenAccent[500],
                },
              }}
            >
              <CloseOutlinedIcon />
            </Button>
          </Box>
          <Box
            sx={{ color: colors.blueAccent[700], mt: -2, width: 420, ml: 6 }}
          >
            <Typography
              textAlign="center"
              fontSize="23px"
              fontWeight="bold"
              sx={{ borderBottom: "2px solid #f5079e" }}
            >
              Add Positions for the Staff Members
            </Typography>
          </Box>
          <Box mt="50px">
            <DesignationForm student={props.student} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
