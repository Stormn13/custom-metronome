import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useState } from 'react';

export default function PlayButton() : React.JSX.Element {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () :void => {
    setIsOn((prevState) => !prevState);
    };
    return(
        <>
            <IconButton onClick={handleToggle} aria-label={isOn ? "pause" : "play"} sx={{bgcolor:'white'}}>
                {isOn ? <PlayArrowIcon/> : <PauseIcon/>}
            </IconButton>
        </>

    );
}