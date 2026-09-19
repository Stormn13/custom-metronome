import * as React from 'react';
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'

export default function MUISlider() : React.JSX.Element {
  const [value, setValue] = React.useState<number>(100);

  const handleChange = (event: Event, newValue: number): void => {setValue( newValue);

  };
  return(
    <Box sx={{width:200}}> 
    <Slider aria-label="bpm" value={value} onChange={handleChange} />
    </Box>
);
}