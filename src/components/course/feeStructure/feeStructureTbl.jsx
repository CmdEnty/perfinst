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

export default function FeeStructureTbl() {
  const [terms, setTerms] = useState(false);
  const [numberOfTerms, setNumberOfTerms] = useState();
  const [columns, setColumns] = useState();
  const [tcolumns, setTcolumns] = useState([]);
  const [rowNumber, setRowNumber] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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

  const handleNumberOfTerms = (e) => {
    const values = e.target.value;
    setNumberOfTerms(values);
  };
  const handleTerms = (e) => {
    if (Number(rowNumber) < 1) {
      e.preventDefault();
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
          headerName = `Description`;
          fieldName = `description`;
          fieldVal = "";
          break;
        case lastInd:
          id = `subTotal${index}/r${rowNumber}`;
          headerName = `SubTotal`;
          fieldName = `subTotal`;
          fieldVal = 0;
          break;
        default:
          id = `t${index}/r${rowNumber}`;
          headerName = `Term ${index}`;
          fieldName = `term`;
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

  const handleChange = (id, event) => {
    const value = event.target.value;

    const newInputFields = columns.map((i) => {
      if (id === i.id) {
        i.fieldVal = value;
        if (i.fieldName === "term") {
          // const termFields = columns.filter((column) => column.id === i.id);
          // termFields.fieldVal = value;

          setColumns(getSubTotal([...columns]));
        }
      }

      return i;
    });
    setColumns([...newInputFields]);
  };

  const deleteRow = (rowNum) => {
    setTcolumns(tcolumns.filter((tcolumn) => tcolumn.rowNo !== rowNum));
  };

  const deleteColumn = () => {
    setColumns([]);
    setTerms(false);
  };

  const cancelTable = () => {
    colm = [];
    setTcolumns([]);
    setColumns([]);
    setTerms(false);
    setRowNumber(0);
    setNumberOfTerms(0);
  };

  const getSubTotal = (val) => {
    let subT = 0;

    // subT = Number(i.fieldVal) + Number(subT);

    const subTotal = val.filter((column) => column.fieldName === "subTotal");
    const termsFields = val.filter((column) => column.fieldName === "term");

    // index.fieldVal = Number(i.fieldVal) + Number(index.fieldVal);
    termsFields.map((termsField) => {
      subT = Number(subT) + Number(termsField.fieldVal);
      subTotal.map((sTotal) => {
        sTotal.fieldVal = subT;
        // alert(subT);
        return setColumns([...val, termsField]);
      });

      return columns;
    });
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
              type="number"
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
                // onClick={}
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

      {tcolumns.map((clm) => {
        const { vals, rowNo } = clm;
        return (
          <Box display="flex" gap="10px" key={rowNo}>
            {vals.map((cm) => {
              return (
                <TextField
                  multiline
                  fullWidth
                  variant="filled"
                  disabled={cm.fieldName === "subTotal"}
                  type={cm.fieldName === "description" ? "text" : "number"}
                  label={cm.headerName}
                  value={
                    cm.fieldName === "term" && cm.fieldVal === 0
                      ? ""
                      : cm.fieldVal
                  }
                  onChange={handleTerms}
                  name={cm.fieldName}
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

      {terms === true && (
        <form>
          <Box display="flex" gap="10px">
            {columns.map((clm) => (
              <Box width="200px" key={clm.id}>
                <TextField
                  multiline
                  fullWidth
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
              </Box>
            ))}
            <Tooltip title="Delete this row">
              <IconButton onClick={deleteColumn}>
                <DeleteIcon color="error" />
              </IconButton>
            </Tooltip>
          </Box>
        </form>
      )}
    </Box>
  );
}
