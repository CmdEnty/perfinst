import * as React from 'react';
// import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box } from '@mui/material';

export default function ColorRadioButtons(props) {
   const {title, value1, value2, span1, span2, msg, msg1, msg2, msg3} = props;

  const controlProps = (item) => ({
    checked:  Object.values(props.btnChange).includes(item),
    onChange: item => props.handleBtnChange(item),
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Box color={msg1 || msg || msg2 || msg3 ? 'red':''}>
      <span>{title}</span><br />
      <Radio {...controlProps(value1)} color="secondary" sx={{
           color: msg1 || msg || msg2 || msg3 ? 'red':'',
        }}/><span>{span1}</span>
      <Radio {...controlProps(value2)} color="success" sx={{
           color: msg1 || msg || msg2 || msg3 ? 'red':'',
           '&.Mui-checked': {
            color: '#0ba2de',
          },
        }}/><span>{span2}</span><br />
      <Box color="red">{msg}</Box>
      <Box color="red">{msg1}</Box>
      <Box color="red">{msg2}</Box>
      <Box color="red">{msg3}</Box>
      {/* <Radio {...controlProps('d')} color="default" /> */}
      {/* <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> */}
    </Box>
  );
}
