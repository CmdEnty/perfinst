import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const undoSnackBar = (
  msg,
  enqueueSnackbar,
  closeSnackbar,
  undoFunc,
  undoArg,
  setTerms,
  clmn,
  setTotalsFields,
  deletedRow,
  totalsFields
) => {
  const horizontal = "right";
  const vertical = "top";

  const calcT = () => {
    if (clmn === "columns") {
      deletedRow.map((deletedR) => {
        if (deletedR.fieldName === "term") {
          const subT = totalsFields.map((totalsField) => {
            if (totalsField.groupName === deletedR.headerName) {
              totalsField.fieldVal =
                Number(totalsField.fieldVal) + Number(deletedR.fieldVal);
            }
            if (totalsField.fieldName === "total") {
              totalsField.fieldVal =
                Number(totalsField.fieldVal) + Number(deletedR.fieldVal);
            }
            return totalsField;
          });
          setTotalsFields([...subT]);
        }
        setTerms(true);
        return deletedR;
      });
    } else {
      deletedRow.map((deletedR) => {
        deletedR.vals.map((val) => {
          if (val.fieldName === "term") {
            const subT = totalsFields.map((totalsField) => {
              if (totalsField.groupName === val.headerName) {
                totalsField.fieldVal =
                  Number(totalsField.fieldVal) + Number(val.fieldVal);
              }
              if (totalsField.fieldName === "total") {
                totalsField.fieldVal =
                  Number(totalsField.fieldVal) + Number(val.fieldVal);
              }
              return totalsField;
            });
            setTotalsFields(subT);
          }
          return val;
        });
        return deletedR;
      });
    }
  };
  const undoFunction = () => {
    calcT();
    undoFunc(undoArg);
  };
  const action = (snackbarId) => (
    <>
      <Button
        sx={{ color: "#f5079e" }}
        size="small"
        onClick={() => {
          undoFunction();
          return closeSnackbar(snackbarId);
        }}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return enqueueSnackbar(
    msg,

    {
      action,
      anchorOrigin: { vertical, horizontal },
      variant: "success",
    }
  );
};
