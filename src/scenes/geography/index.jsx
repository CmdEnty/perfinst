// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";

// const styles = {
//     color: "#f1f1f1",
//     minWidth: 90,
//     "&:hover": {
//       borderBottom: 1,
//       borderColor: 'red'
//     },
// };

// export default function AccountMenu() {
//   return (
//     <React.Fragment>
//       <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
//         <Tooltip title="Admitted Students">
//           <Link
//             to="/geography"
//             style={{ textDecoration: "none" }}
//             activeStyle={{ color: "red" }}
//           >
//             <Typography sx={styles}>ADIMITTED</Typography>
//           </Link>
//         </Tooltip>
//         <Tooltip title="Register Student">
//           <Link to="/students" style={{ textDecoration: "none" }}>
//             <Typography sx={styles}>REGISTER</Typography>
//           </Link>
//         </Tooltip>
//         <Tooltip title="Pending Students">
//           <Link to="/students" style={{ textDecoration: "none" }}>
//             <Typography sx={styles}>PENDING</Typography>
//           </Link>
//         </Tooltip>
//       </Box>
//     </React.Fragment>
//   );
// }

// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// // import Icon from "@mui/icons-material/Icon";
// import { v4 as uuidv4 } from "uuid";
// import { useState } from "react";

// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// function TxtField() {
//   const classes = useStyles();
//   const [inputFields, setInputFields] = useState([
//     { id: uuidv4(), firstName: "", lastName: "" },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputFields);
//   };

//   const handleChangeInput = (id, event) => {
//     const newInputFields = inputFields.map((i) => {
//       if (id === i.id) {
//         i[event.target.name] = event.target.value;
//       }
//       return i;
//     });

//     setInputFields(newInputFields);
//   };

//   const handleAddFields = () => {
//     setInputFields([
//       ...inputFields,
//       { id: uuidv4(), firstName: "", lastName: "" },
//     ]);
//   };

//   const handleRemoveFields = (id) => {
//     const values = [...inputFields];
//     values.splice(
//       values.findIndex((value) => value.id === id),
//       1
//     );
//     setInputFields(values);
//   };

//   return (
//     <Container>
//       <h1>Add New Member</h1>
//       <form className={classes.root} onSubmit={handleSubmit}>
//         {inputFields.map((inputField) => (
//           <div key={inputField.id}>
//             <TextField
//               name="firstName"
//               label="First Name"
//               variant="filled"
//               value={inputField.firstName}
//               onChange={(event) => handleChangeInput(inputField.id, event)}
//             />
//             <TextField
//               name="lastName"
//               label="Last Name"
//               variant="filled"
//               value={inputField.lastName}
//               onChange={(event) => handleChangeInput(inputField.id, event)}
//             />
//             <IconButton
//               disabled={inputFields.length === 1}
//               onClick={() => handleRemoveFields(inputField.id)}
//             >
//               <RemoveIcon />
//             </IconButton>
//             <IconButton onClick={handleAddFields}>
//               <AddIcon />
//             </IconButton>
//           </div>
//         ))}
//         <Button
//           className={classes.button}
//           variant="contained"
//           color="primary"
//           type="submit"
//           // endIcon={<Icon>send</Icon>}
//           onClick={handleSubmit}
//         >
//           Send
//         </Button>
//       </form>
//     </Container>
//   );
// }

// export default TxtField;
