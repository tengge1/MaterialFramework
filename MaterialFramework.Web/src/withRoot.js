import React from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

const themeBase = createMuiTheme({
    palette: {
        // primary: {     light: purple[300],     main: purple[500],     dark:
        // purple[700] }, secondary: {     light: green[300],     main: green[500],
        // dark: green[700] }
    }
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={themeBase}>
                <CssBaseline/>
                <Component {...props}/>
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export {themeBase, withRoot};

export default withRoot;