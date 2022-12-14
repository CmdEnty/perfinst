import React from 'react'
import StudentFormTab from '../../components/studentFormTab';
import Header from "../../components/Header";
import { Box, Typography } from '@mui/material';
import AccountMenu from "../global/ColoredTab";
import { useState } from "react";

function AddStudent() {
   const [student, setStudent] = useState({
    //  selectedValue: "",
    //  form1Submitted: "",
    //  surName: "sssss",
    //  fastName: "ffff",
    //  middleName: "gggggg",
    //  gender: "ggggg",
    //  idNumber: "ddddd",
    //  selectedNationality: "hhhh",
    //  nationality: "ffffff",

    //  form2Submitted: "",
    //  selectedSpecialNeeds: "",
    //  course: "",
    //  placeOfBirth: "",
    //  DOB: "",
    //  county: "",
    //  location: "",
    //  phone: "",
    //  email: "",
    //  maritalStatus: "",
    //  specialNeeds: "",

    //  form3Submitted: "",
    //  fullName: "",
    //  p_location: "",
    //  p_phone: "",
    //  p_email: "",
    //  relationShip: "",
    //  p_selectedNationality: "",
    //  passportNumber: "",
    //  p_nationality: "",
    //  p_idNo: "",
   });

  const handleFormChange = (values) => {
    setStudent({ ...student, ...values})
  }

  return (
    <>
      <Box m="20px">
        <Header title="REGISTER STUDENT" subtitle="Student Registration Form" />
      </Box>
      <Box m="20px">
        <AccountMenu value="two" />
      </Box>
      <Box m="20px 0 15px 30px">
        {" "}
        <Typography color="#0ba2de" fontWeight="bold" fontSize="16px">
          REGISTER NEW STUDENT
        </Typography>
      </Box>

      <StudentFormTab student={student} handleFormChange={handleFormChange} />
    </>
  );
}

export default AddStudent