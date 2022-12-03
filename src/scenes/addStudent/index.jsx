import React from 'react'
import StudentFormTab from '../../components/studentFormTab';
import Header from "../../components/Header";
import { Box } from '@mui/material';
import ColorTabs from '../global/ColoredTab';
import { useState } from "react";

function AddStudent() {
   const [student, setStudent] = useState({
  selectedValue: "",
  form1Submitted: "",
  surName: "",
  fastName: "",
  middleName: "",
  selectedGender: "",
  idNo: "",
  selectedNationality: "",
  nationality: "",

  form2Submitted: "",
  selectedSpecialNeeds: "",
  course: "",
  placeOfBirth: "",
  DOB: "",
  county: "",
  location: "",
  phone: "",
  email: "",
  maritalStatus: "",
  specialNeeds: "",
  
  form3Submitted: "",
  fullName: "",
  p_location: "",
  p_phone: "",
  p_email: "",
  relationShip: "",
  p_selectedNationality: "",
  passportNumber: "",
  p_nationality: "",
  p_idNo: "",
  });

  const handleFormChange = (values) => {
    setStudent({ ...student, ...values})
  }

  return (
    <>
    <Box m="30px">
      <Header title="REGISTER STUDENT" subtitle="Student Registration Form" />
     </Box>
    <Box m="20px">
      <ColorTabs value="two"/>
     </Box>
    <StudentFormTab student={student} handleFormChange={handleFormChange}/>
    </>
  )
}

export default AddStudent