import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';

class MaterialApp extends React.Component {
    render() {
        const isLogin = Cookies.get('isLogin');
        if (isLogin) {
            return <Home/>
        } else {
            return <Login/>
        }
    }
}

ReactDOM.render(
    <MaterialApp/>, document.getElementById("root"));
