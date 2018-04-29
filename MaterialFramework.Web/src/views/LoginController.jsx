import Cookies from 'js-cookie';

class LoginController {
    state = {
        username: '',
        password: '',
        showPassword: false
    };

    onLogin(event) { // 登录
        event.preventDefault();

        // 在这里判断用户名和密码是否正确
        // alert(`用户名:${this.state.username} 密码：${this.state.password}`);

        Cookies.set('isLogin', true);
        window.location.reload();
    }

    onReset(event) { // 重置
        this.setState({ username: '', password: '' });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    handleMouseDownPassword(event) {
        event.preventDefault();
    }
};

export default LoginController;