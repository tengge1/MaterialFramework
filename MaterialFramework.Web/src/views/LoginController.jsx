import Cookies from 'js-cookie';

var LoginController = {
    onLogin: function (event) {
        event.preventDefault();
        Cookies.set('isLogin', true);
        window.location.reload();
    },
    onReset: function (event) {
        this.setState({ username: '', password: '' });
    }
};

export default LoginController;