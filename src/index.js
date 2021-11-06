import './index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'css/theme'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
