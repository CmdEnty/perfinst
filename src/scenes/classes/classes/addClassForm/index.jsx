import React from "react";
import { useState } from "react";
import AddClassesForm1 from "./form1";
import AddClassesForm2 from "./form2";

export default function AddClassesForm() {
  const [classesForm, setClassesForm] = useState("form1");

  return (
    <>
      {classesForm === "form1" ? (
        <AddClassesForm1 setClassesForm={setClassesForm} />
      ) : classesForm === "form2" ? (
        <AddClassesForm2 setClassesForm={setClassesForm} />
      ) : undefined}
    </>
  );
}
