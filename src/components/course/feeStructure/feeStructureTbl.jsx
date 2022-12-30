import React from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../theme";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { undoSnackBar } from "../../snackBar";
import { useSnackbar } from "notistack";

export default function FeeStructureTbl() {
  const [terms, setTerms] = useState(false);
  const [numberOfTerms, setNumberOfTerms] = useState(0);
  const [columns, setColumns] = useState();
  const [tcolumns, setTcolumns] = useState([]);
  const [rowNumber, setRowNumber] = useState(0);
  const [totalsFields, setTotalsFields] = useState();
  const [editMode, setEditMode] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClickAway = (id, value, event) => {
    if (editMode) {
      if (id === editMode) {
        if (value === "") {
          alert("Please fill the field");
          //  setTimeout(() => {
          //    event.target.name.focus();
          //  }, 100);
        } else {
          setEditMode();
        }
      }
    }
  };

  const addRows = () => {
    if (!terms) {
      handleTerms();
    } else {
      colm = [];
      const newRowNumber = Number(rowNumber) + 1;
      const NewRow = [{ rowNo: rowNumber, vals: columns }];
      handleTerms();
      setTcolumns([...tcolumns, ...NewRow]);
      setRowNumber(newRowNumber);
    }
  };

  let colm = [];
  let totalsColm = [];

  const handleNumberOfTerms = (e) => {
    const values = e.target.value;
    setNumberOfTerms(values);
  };
  const handleTerms = (e) => {
    if (Number(rowNumber) < 1) {
      e.preventDefault();
      creatTotalsColm();
    }

    const newValue = Number(numberOfTerms) + 2;
    const lastInd = Number(newValue) - 1;
    let id;
    let headerName;
    let fieldName;
    let fieldVal;

    for (let index = 0; index < newValue; index++) {
      switch (index) {
        case 0:
          id = `descr${index}/r${rowNumber}`;
          headerName = "Description";
          fieldName = "description";
          fieldVal = "";
          break;
        case lastInd:
          id = `subTotal${index}/r${rowNumber}`;
          headerName = "SubTotal";
          fieldName = "subTotal";
          fieldVal = 0;
          break;
        default:
          id = `t${index}/r${rowNumber}`;
          headerName = `Term ${index}`;
          fieldName = "term";
          fieldVal = 0;
          break;
      }

      let element = {
        id: id,
        headerName: headerName,
        fieldName: fieldName,
        fieldVal: fieldVal,
      };
      colm.push(element);
    }
    creatTbl();
  };

  const creatTbl = () => {
    const newRowNo = rowNumber === 0 ? 1 : rowNumber;
    setColumns(colm);
    setTerms(true);
    setRowNumber(newRowNo);
  };

  const creatTotalsColm = () => {
    const newValue = Number(numberOfTerms) + 1;
    const lastInd = Number(newValue) - 1;
    let id;
    let headerName;
    let groupName;
    let fieldName;
    let fieldVal;

    for (let index = 0; index < newValue; index++) {
      switch (index) {
        case lastInd:
          id = `total${index}/r${rowNumber}`;
          headerName = "Total";
          groupName = "subTotal";
          fieldName = "total";
          fieldVal = 0;
          break;
        default:
          id = `t${index}`;
          headerName = `Term ${index + 1} Totals`;
          groupName = `Term ${index + 1}`;
          fieldName = "term";
          fieldVal = 0;
          break;
      }

      let element = {
        id: id,
        headerName: headerName,
        groupName: groupName,
        fieldName: fieldName,
        fieldVal: fieldVal,
      };
      totalsColm.push(element);
    }
    setTotalsFields(totalsColm);
    totalsColm = [];
  };

  const handleChange = (id, event) => {
    const value = event.target.value;

    const newInputFields = columns.map((i) => {
      if (id === i.id) {
        i.fieldVal = value;
        if (i.fieldName === "term") {
          getTermTotal(i);
          setColumns(getSubTotal([...columns]));
        }
      }

      return i;
    });
    setColumns([...newInputFields]);
  };

  const deleteRow = (rowNum) => {
    const currentRows = [...tcolumns];
    const clmn = "tcolumns";
    let subT;
    const deletedRow = tcolumns.filter((tcolumn) => tcolumn.rowNo === rowNum);
    deletedRow.map((deletedR) => {
      deletedR.vals.map((val) => {
        if (val.fieldName === "term") {
          subT = totalsFields.map((totalsField) => {
            if (totalsField.groupName === val.headerName) {
              totalsField.fieldVal =
                Number(totalsField.fieldVal) - Number(val.fieldVal);
            }
            if (totalsField.fieldName === "total") {
              totalsField.fieldVal =
                Number(totalsField.fieldVal) - Number(val.fieldVal);
            }
            return totalsField;
          });
        }
        return val;
      });
      return deletedR;
    });
    setTotalsFields(subT);
    setTcolumns(tcolumns.filter((tcolumn) => tcolumn.rowNo !== rowNum));
    undoSnackBar(
      "Row deleted successfuly",
      enqueueSnackbar,
      closeSnackbar,
      setTcolumns,
      currentRows,
      setTerms,
      clmn,
      setTotalsFields,
      deletedRow,
      totalsFields
    );
  };

  const deleteColumn = () => {
    const currentRows = [...columns];
    const clmn = "columns";
    columns.map((deletedR) => {
      if (deletedR.fieldName === "term") {
        const subT = totalsFields.map((totalsField) => {
          if (totalsField.groupName === deletedR.headerName) {
            totalsField.fieldVal =
              Number(totalsField.fieldVal) - Number(deletedR.fieldVal);
          }
          if (totalsField.fieldName === "total") {
            totalsField.fieldVal =
              Number(totalsField.fieldVal) - Number(deletedR.fieldVal);
          }
          return totalsField;
        });
        setTotalsFields([...subT]);
      }

      return deletedR;
    });
    setColumns([]);
    setTerms(false);
    undoSnackBar(
      "Row deleted successfuly",
      enqueueSnackbar,
      closeSnackbar,
      setColumns,
      currentRows,
      setTerms,
      clmn,
      setTotalsFields,
      currentRows,
      totalsFields
    );
    return;
  };

  const cancelTable = () => {
    colm = [];
    setTcolumns([]);
    setColumns([]);
    setTerms(false);
    setRowNumber(0);
    setNumberOfTerms(0);
    setTotalsFields([]);
  };

  const getSubTotal = (val) => {
    let subT = 0;

    const subTotal = val.filter((column) => column.fieldName === "subTotal");
    const termsFields = val.filter((column) => column.fieldName === "term");

    termsFields.map((termsField) => {
      subT = Number(subT) + Number(termsField.fieldVal);
      subTotal.map((sTotal) => {
        sTotal.fieldVal = subT;
        return setColumns([...val, termsField]);
      });

      return columns;
    });
  };

  const getTermTotal = (i) => {
    let subT = 0;

    let tFields = 0;
    let genTotal = 0;
    tcolumns.flat().map((tcolm) => {
      tcolm.vals.map((val) => {
        if (val.headerName === i.headerName) {
          tFields = Number(tFields) + Number(val.fieldVal);
        }

        return val;
      });

      return tcolm;
    });

    columns.map((termsField) => {
      if (termsField.headerName === i.headerName) {
        subT = Number(subT) + Number(termsField.fieldVal);
      }

      return subT;
    });

    const calTotalsFields = totalsFields.map((fTotal) => {
      if (fTotal.groupName === i.headerName) {
        fTotal.fieldVal = Number(subT) + Number(tFields);
      }
      if (fTotal.fieldName === "term") {
        genTotal = Number(genTotal) + Number(fTotal.fieldVal);
      }
      if (fTotal.fieldName === "total") {
        fTotal.fieldVal = Number(genTotal);
      }
      return fTotal;
    });
    setTotalsFields([...calTotalsFields]);
  };

  const fieldInEditMode = (id, event) => {
    // setTimeout(() => {
    //   event.target.name.focus();
    // }, 100);
    setEditMode(id);
  };

  const savedFieldChange = (id, rowNm, event) => {
    const value = event.target.value;

    const newInputFields = tcolumns.map((val) => {
      let subT = 0;
      if (val.rowNo === rowNm) {
        val.vals.map((i) => {
          switch (i.fieldName) {
            case "term":
              if (id === i.id) {
                i.fieldVal = value;

                getTermTotal(i);
              }
              subT = Number(subT) + Number(i.fieldVal);
              break;
            case "subTotal":
              i.fieldVal = subT;
              break;
            case "description":
              if (id === i.id) {
                i.fieldVal = value;
              }
              break;
            default:
              break;
          }

          return i;
        });
      }
      return val;
    });
    setTcolumns(newInputFields);
  };

  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <form onSubmit={handleTerms}>
        <Box display="flex" gap="20px">
          <Box width="200px">
            <TextField
              required
              disabled={terms}
              fullWidth
              variant="filled"
              // focused

              type="number"
              InputProps={{ inputProps: { min: 1, max: 3 } }}
              label="Enter Number Of Terms"
              value={numberOfTerms === 0 ? "" : numberOfTerms}
              onChange={(event) => handleNumberOfTerms(event)}
              name="numberOfTerms"
              sx={{
                "& .Mui-focused": {
                  color: "#f2f0f0 !important",
                  input: {
                    color: "#f2f0f0 !important",
                  },
                },
                "& .Mui-focused.Mui-error": {
                  color: "#f44336 !important",
                },
                "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before": {
                  borderBottom: "2px solid #0ba2de !important",
                },
                "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                  borderBottom: "2px solid #f5079e !important",
                },
                "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                  {
                    borderBottom: "#f44336 !important",
                  },
              }}
            />
          </Box>
          {Number(rowNumber) < 1 && (
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: colors.grey[100],
                  fontSize: 20,
                  fontWeight: "bold",
                  bgcolor: colors.primary[600],
                  "&:hover": {
                    color: colors.greenAccent[500],
                  },
                }}
              >
                <Typography>Submit</Typography>
              </Button>
            </Box>
          )}
        </Box>
      </form>
      {Number(rowNumber) > 0 && (
        <Box display="flex" gap="40px">
          <Box width="200px">
            {" "}
            <Button
              onClick={addRows}
              variant="contained"
              sx={{
                color: colors.grey[100],
                fontSize: 20,
                fontWeight: "bold",
                bgcolor: colors.primary[600],
                "&:hover": {
                  color: colors.greenAccent[500],
                },
              }}
            >
              <Typography>Add Record</Typography>
            </Button>
          </Box>

          <Box display="flex" gap="30px">
            {" "}
            <Box>
              {" "}
              <Button
                onClick={cancelTable}
                variant="contained"
                sx={{
                  color: colors.grey[100],
                  fontSize: 20,
                  fontWeight: "bold",
                  bgcolor: colors.primary[600],
                  "&:hover": {
                    color: colors.greenAccent[500],
                  },
                }}
              >
                <Typography>Cancel All</Typography>
              </Button>
            </Box>
            <Button
              onClick={cancelTable}
              variant="contained"
              sx={{
                color: colors.grey[100],
                fontSize: 20,
                fontWeight: "bold",
                bgcolor: colors.primary[600],
                "&:hover": {
                  color: colors.greenAccent[500],
                },
              }}
            >
              <Typography>Save</Typography>
            </Button>
          </Box>
        </Box>
      )}
      <Box overflow="auto" maxHeight="290px">
        {tcolumns.map((clm) => {
          const { vals, rowNo } = clm;
          return (
            <Box display="flex" gap="10px" key={rowNo} mb="10px">
              {vals.map((cm) => {
                return (
                  <ClickAwayListener
                    onClickAway={(event) =>
                      handleClickAway(cm.id, cm.fieldVal, event)
                    }
                  >
                    <TextField
                      multiline={cm.fieldName === "description"}
                      fullWidth
                      variant="filled"
                      InputProps={
                        cm.fieldName === "term" && {
                          inputProps: { min: 1, max: 3 },
                        }
                      }
                      disabled={
                        cm.fieldName === "subTotal" || cm.id !== editMode
                      }
                      focused={cm.id === editMode}
                      onDoubleClick={(event) => fieldInEditMode(cm.id, event)}
                      type={cm.fieldName === "description" ? "text" : "number"}
                      label={cm.headerName}
                      value={
                        cm.fieldName === "term" && cm.fieldVal === 0
                          ? ""
                          : cm.fieldVal
                      }
                      onChange={(event) =>
                        savedFieldChange(cm.id, rowNo, event)
                      }
                      name={cm.fieldName}
                      sx={{
                        width:
                          cm.fieldName === "description"
                            ? "40%"
                            : `${60 / (Number(numberOfTerms) + 1)}%`,
                        "& .Mui-focused": {
                          color: "#f2f0f0 !important",
                          input: {
                            color: "#f2f0f0 !important",
                          },
                        },
                        "& .Mui-focused.Mui-error": {
                          color: "#f44336 !important",
                        },
                        "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                          {
                            borderBottom: "2px solid #0ba2de !important",
                          },
                        "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after":
                          {
                            borderBottom: "2px solid #f5079e !important",
                          },
                        "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                          {
                            borderBottom: "#f44336 !important",
                          },
                      }}
                    />
                  </ClickAwayListener>
                );
              })}
              {Number(rowNumber) > 0 && (
                <Tooltip title="Delete this row">
                  <IconButton onClick={() => deleteRow(rowNo)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          );
        })}
      </Box>

      {terms === true && (
        <form>
          <Box display="flex" gap="10px" width="100%">
            {columns.map((clm) => (
              <TextField
                fullWidth
                multiline={clm.fieldName === "description"}
                disabled={clm.fieldName === "subTotal"}
                variant="filled"
                type={clm.fieldName === "description" ? "text" : "number"}
                label={clm.headerName}
                // onBlur={handleBlur}

                onChange={(event) => handleChange(clm.id, event)}
                name={clm.fieldName}
                value={
                  clm.fieldName === "term" && clm.fieldVal === 0
                    ? ""
                    : clm.fieldVal
                }
                sx={{
                  width:
                    clm.fieldName === "description"
                      ? "40%"
                      : `${60 / (Number(numberOfTerms) + 1)}%`,
                  "& .Mui-focused": {
                    color: "#f2f0f0 !important",
                    input: {
                      color: "#f2f0f0 !important",
                    },
                  },
                  "& .Mui-focused.Mui-error": {
                    color: "#f44336 !important",
                  },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                    {
                      borderBottom: "2px solid #0ba2de !important",
                    },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                    borderBottom: "2px solid #f5079e !important",
                  },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                    {
                      borderBottom: "#f44336 !important",
                    },
                }}
              />
            ))}
            <Tooltip title="Delete this row">
              <IconButton onClick={deleteColumn}>
                <DeleteIcon color="error" />
              </IconButton>
            </Tooltip>
          </Box>
        </form>
      )}

      {Number(rowNumber) > 0 && (
        <Box
          display="flex"
          gap="10px"
          sx={{
            pr: "45px",

            justifyContent: "flex-end",
          }}
        >
          <Box
            display="flex"
            gap="10px"
            width="100%"
            sx={{
              pl: "60px",
              justifyContent: "flex-end",
            }}
          >
            {totalsFields.map((totalsField) => (
              <TextField
                fullWidth
                disabled
                variant="filled"
                type="number"
                label={totalsField.headerName}
                name={totalsField.fieldName}
                value={totalsField.fieldVal}
                sx={{
                  width: `${60 / (Number(numberOfTerms) + 1)}%`,
                  "& .Mui-focused": {
                    color: "#f2f0f0 !important",
                    input: {
                      color: "#f2f0f0 !important",
                    },
                  },
                  "& .Mui-focused.Mui-error": {
                    color: "#f44336 !important",
                  },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:before":
                    {
                      borderBottom: "2px solid #0ba2de !important",
                    },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root:after": {
                    borderBottom: "2px solid #f5079e !important",
                  },
                  "& .css-u7c0k7-MuiInputBase-root-MuiFilledInput-root.Mui-error:after":
                    {
                      borderBottom: "#f44336 !important",
                    },
                }}
              />
              // </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
