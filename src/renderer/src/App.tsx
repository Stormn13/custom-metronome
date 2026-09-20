import MUISlider from "./components/MUISlider";
import Stack from '@mui/material/Stack'
import PlayButton from "./components/PlayButton";
function App(): React.JSX.Element {


  return (
    <>
      <Stack spacing={2} direction="row">
      <MUISlider/>
      <PlayButton/>
      </Stack>
    </>
  )
}

export default App
