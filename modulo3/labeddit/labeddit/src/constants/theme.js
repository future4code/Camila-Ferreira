import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: neutralColor,
    },
    text: {
        primary: neutralColor
    }
  },
})

export default theme