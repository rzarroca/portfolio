import { createTheme } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'

function cssCustomProps () {
  const r = document.querySelector(':root')
  const rs = getComputedStyle(r)
  return rs
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: cssCustomProps().getPropertyValue('--typography-large'),
      fontWeight: 'normal',
      fontFamily: 'inherit'
    }
  }
})

export { theme }
