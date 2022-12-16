import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

const initialRows = [
  // {
  //   id: randomId(),
  //   description: "yugjgffffffff",
  // },
  // {
  //   id: randomId(),
  //   description: "hhhhhhhhhhhh",
  // },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button startIcon={<AddIcon />} onClick={handleClick}>
        <Typography color="#f2f0f0">Add New Qualification</Typography>
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function FeeStructureTbl() {
  const [terms, setTerms] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const creatTbl = ()=>{setColumns(terms);}

  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState(0);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const colm = [
    // {
    //   field: `term`,
    //   headerName: `Term`,
    //   width: 100,
    //   editable: true,
    // },
  ];
  const handleTerms = (e) => {
    const values = e.target.value;
    for (let index = 0; index < values; index++) {
      let element = {
        field: `term${index + 1}`,
        headerName: `Term ${index + 1}`,
        width: 100,
        editable: true,
      };
      colm.push(element);
    }
    // index === 3 ? ()=>alert(colm[2]) : undefined;
    // if (index === values - 1) {
    const colmns = [
      ...colm,

      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

          if (isInEditMode) {
            return [
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                onClick={handleSaveClick(id)}
              />,
              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }

          return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
          ];
        },
      },
    ];
    
    setTerms(colmns);
    // }

    // values.map((index, value)=>alert(values[index]))
    // setTerms(e.target.value);
  };

  return (
    <Box>
      <Box display="flex" gap="20px">
        <Box width="200px">
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Enter Number Of Terms"
            // onBlur={handleBlur}
            onChange={handleTerms}
            name="month"
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
        <Box>
          <Button
            onClick={creatTbl}
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
      </Box>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "secondary",
          },
          "& .textPrimary": {
            color: "primary",
          },
        }}
      >
        {columns !== 0 && (
          <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            components={{
              Toolbar: EditToolbar,
            }}
            componentsProps={{
              toolbar: { setRows, setRowModesModel },
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        )}
      </Box>
    </Box>
  );
}
