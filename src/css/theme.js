import { createTheme } from '@mui/material/styles'

function cssCustomProps () {
  const r = document.querySelector(':root')
  const rs = getComputedStyle(r)
  return rs
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#30475E'
    },
    secondary: {
      main: '#E8C084'
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
