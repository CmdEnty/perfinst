import { Box, Typography, Button } from "@mui/material";
import React from "react";
import ConfirmationCard from "../confirmationCard";
import Alert from "@mui/material/Alert";
import StudentFormDialog from "../dialogs/studentFm";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosReq } from "../../axiosReq";

export default function ConfirmationForm(props) {
  const {
    selectedValue,
    surName,
    fastName,
    middleName,
    gender,
    idNumber,
    selectedNationality,
    nationality,
    selectedSpecialNeeds,
    course,
    placeOfBirth,
    DOB,
    county,
    location,
    phone,
    email,
    maritalStatus,
    specialNeeds,
    fullName,
    p_location,
    p_phone,
    p_email,
    relationShip,
    p_selectedNationality,
    passportNumber,
    p_nationality,
    p_idNo,
  } = props.student;

  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Access the client
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(["todos"], () =>
    axiosReq
      .get("student")
      .then((res) => {
        return alert(res.data);
      })
      .catch((error) => {
        return alert(error);
      })
  );

  // Queries
  // const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // Mutations
  const mutation = useMutation(
    (newStudent) => {
      axiosReq
        .post("student/addStudent", newStudent)
        .then((res) => {
          return alert("added");
        })
        .catch((error) => {
          return alert(error);
        });
    },
    {
      onSuccess: () => {
        return alert("added");
        // Invalidate and refetch
        // queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
      onError: () => {
        return alert("oops something went wrong");
        // Invalidate and refetch
        // queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );

  const handleClickOpen = () => {
    mutation.mutate({ ...props.student });
  };

  return (
    <div>
      {open && <StudentFormDialog />}
      <Box ml="45px">
        <Alert severity="success">
          <Typography variant="h5">
            You have Completed the registration Process Please confirm your data
            before you submit
          </Typography>
        </Alert>
      </Box>
      <Box overflow="auto" width="45rem" height="40rem" ml="45px" mt="25px">
        <Box ml="55px">
          <Typography
            variant="h4"
            ml="20px"
            color={colors.blueAccent[700]}
            fontWeight="bold">
            Personal Information
          </Typography>
          <ConfirmationCard name="Designation" value={selectedValue} />
          <ConfirmationCard name="Surname" value={surName} />
          <ConfirmationCard name="Fast Name" value={fastName} />
          <ConfirmationCard name="Middle Name" value={middleName} />
          <ConfirmationCard name="Gender" value={gender} />
          <ConfirmationCard name="ID Number" value={idNumber} />
          <ConfirmationCard name="Nationality" value={selectedNationality} />
          {selectedNationality === "Other" && (
            <ConfirmationCard name="Country" value={nationality} />
          )}
          <br />

          <Typography
            variant="h4"
            ml="20px"
            color={colors.blueAccent[700]}
            fontWeight="bold">
            Basic Information
          </Typography>
          <ConfirmationCard name="Course" value={course} />
          <ConfirmationCard name="Date Of Birth" value={DOB} />
          <ConfirmationCard name="Place Of Birth" value={placeOfBirth} />
          <ConfirmationCard name="County" value={county} />
          <ConfirmationCard name="Location" value={location} />
          <ConfirmationCard name="Phone Number" value={phone} />
          <ConfirmationCard name="Email" value={email} />
          <ConfirmationCard name="Marital Status" value={maritalStatus} />
          <ConfirmationCard name="Special Needs" value={selectedSpecialNeeds} />
          {selectedSpecialNeeds === "Yes" && (
            <ConfirmationCard
              name="Special Needs Details"
              value={specialNeeds}
            />
          )}
          <br />

          <Typography
            variant="h4"
            ml="20px"
            color={colors.blueAccent[700]}
            fontWeight="bold">
            Next Of Kin
          </Typography>
          <ConfirmationCard name="Full Name" value={fullName} />
          <ConfirmationCard name="Location" value={p_location} />
          <ConfirmationCard name="Phone Number" value={p_phone} />
          <ConfirmationCard name="Email" value={p_email} />
          <ConfirmationCard name="Relationship" value={relationShip} />
          <ConfirmationCard name="Nationality" value={p_selectedNationality} />
          {p_selectedNationality === "Kenya" && (
            <ConfirmationCard name="ID Number" value={p_idNo} />
          )}
          {p_selectedNationality === "Other" && (
            <ConfirmationCard name="Country" value={p_nationality} />
          )}
          {p_selectedNationality === "Other" && (
            <ConfirmationCard
              name="passportNumber/ID Number"
              value={passportNumber}
            />
          )}

          <Box display="flex" mt="20px" gap="30px" ml="346px">
            <Button type="submit" color="secondary" variant="contained">
              CANCEL
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClickOpen}>
              CONFIRM
            </Button>
          </Box>
          <br />
          <br />
        </Box>
      </Box>
    </div>
  );
}
