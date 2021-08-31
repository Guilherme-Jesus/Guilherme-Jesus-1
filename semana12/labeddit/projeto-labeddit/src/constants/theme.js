import { createTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';


const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        }

    }
});

export default theme