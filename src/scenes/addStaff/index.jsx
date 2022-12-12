import React from "react";
import StudentFormTab from "../../components/studentFormTab";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import StaffMenu from "../global/staffMenu";

function AddStaff() {
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
    setStudent({ ...student, ...values });
  };

  return (
    <>
      <Box m="20px">
        <Header title="REGISTER STAFF" subtitle="Staff Registration Form" />
      </Box>
      <Box m="20px">
        <StaffMenu value="two" />
      </Box>
      <Box m="20px 0 15px 30px">
        {" "}
        <Typography color="#0ba2de" fontWeight="bold" fontSize="16px">
          REGISTER NEW STAFF
        </Typography>
      </Box>

      <StudentFormTab student={student} handleFormChange={handleFormChange} />
    </>
  );
}

export default AddStaff;
