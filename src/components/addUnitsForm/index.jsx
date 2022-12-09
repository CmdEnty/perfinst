import React from "react";
import { Box } from "@mui/material";
import AddUnitsForm1 from "./form1";
import { useState } from "react";
import AddUnitsForm2 from "./form2";

export default function AddUnitsForm() {
  const [unitsForm, setUnitsForm] = useState("form1");

  return (
    <>
      {unitsForm === "form1" ? (
        <AddUnitsForm1 setUnitsForm={setUnitsForm} />
      ) : unitsForm === "form2" ? (
        <AddUnitsForm2 setUnitsForm={setUnitsForm} />
      ) : undefined}
    </>
  );
}
