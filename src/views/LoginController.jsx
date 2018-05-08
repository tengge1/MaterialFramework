import Cookies from 'js-cookie';

class LoginController {
    state = {
        username: '',
        password: '',
        showPassword: false,
        rememberPassword: false,
        msgShow: false,
        msgText: '用户名或密码错误！'
    };

    onLogin(event) { // 登录
        event.preventDefault();

        const { username, password } = this.state;

        // 判断用户名和密码是否正确
        if (username.trim() === '') {
            this.setState({
                msgShow: true,
                msgText: '请输入用户名！'
            });
            return;
        }

        if (password.trim() === '') {
            this.setState({
                msgShow: true,
                msgText: '请输入密码！'
            });
            return;
        }

        if (username !== 'admin' || password !== '123') {
            this.setState({
                msgShow: true,
                msgText: '用户名或密码错误，登录失败！'
            });
            return;
        }

        // 登录成功
        window.app.loadMask();

        setTimeout(() => {
            Cookies.set('isLogin', true);
            window.location.reload();
        }, 1200);
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

    handleRememberPassword(event) {
        this.setState({
            rememberPassword: event.target.checked
        });
    }

    handleWrongPasswordClose(event) {
        this.setState({
            msgShow: false
        });
    }
};

export default LoginController;