import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#3e9991',
        },
        error: {
            main: red.A400,
        },
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            'Happy Monkey',
        ].join(','),
    },
});

export default theme;