import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { MuiThemeProvider, createMuiTheme, CssBaseline, purple, green } from './components/Components';
import Home from './views/Home';
import Login from './views/Login';

const themeBase = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700]
        }, secondary: {
            light: green[300],
            main: green[500],
            dark: green[700]
        }
    }
});

// 在控制台输出样式，以便于在程序中取值
console.log(themeBase);

class MaterialFramework extends React.Component {
    render() {
        const isLogin = Cookies.get('isLogin');
        const view = isLogin ? <Home /> : <Login />;

        return <MuiThemeProvider theme={themeBase}>
            <CssBaseline />
            {view}
        </MuiThemeProvider>;
    }
}

ReactDOM.render(
    <MaterialFramework />, document.getElementById("root"));
