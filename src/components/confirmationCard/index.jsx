import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';

export default function ConfirmationCard(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
        //   ml: 3,
          width: 250,
          height: 25,
          bgcolor: 'white',
        },
        gap: "5px !important",
          ml: 3,
          mt: 3,
      }}
    > 
      <Paper variant="outlined" elevation={6}>
      <Typography mt="1px" color="black">{props.name}</Typography>
      </Paper>
      
      <Paper variant="outlined">
      <Typography mt="1px" color="black">{props.value}</Typography>
      </Paper>
    </Box>
  );
}