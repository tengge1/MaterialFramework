import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { MuiThemeProvider, createMuiTheme, CssBaseline, purple, green, LoadMask } from './components/Components';
import Default from './views/Default';
import Login from './views/Login';

// 全局变量，用于快速访问全局函数
window.app = {};

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

window.app.theme = themeBase;

class MaterialFramework extends React.Component {
    state = {
        loading: false,
        loadingMsg: '请稍后...'
    };

    loadMask(msg) {
        this.setState({
            loading: true,
            loadingMsg: msg === undefined ? '请稍后...' : msg
        });
    }

    unloadMask() {
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        window.app.loadMask = () => {
            this.loadMask();
        };
        window.app.unloadMask = () => {
            this.unloadMask();
        };
    }

    render() {
        const isLogin = Cookies.get('isLogin');
        const view = isLogin ? <Default /> : <Login />;

        return <MuiThemeProvider theme={themeBase}>
            <CssBaseline />
            {view}
            <LoadMask show={this.state.loading} />
        </MuiThemeProvider>;
    }
}

ReactDOM.render(
    <MaterialFramework />, document.getElementById("root"));
