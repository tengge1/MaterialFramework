import Cookies from 'js-cookie';

class HeaderController {
    state = {
        msgOpen: false,
        pwdOpen: false,
        navActiveIndex: 0
    };

    handleNavClick(index) {
        this.setState({
            navActiveIndex: index
        });
    };

    handleMsgClick() {
        this.setState({
            msgOpen: !this.state.msgOpen
        });
    };

    handleMsgClose() {
        this.setState({
            msgOpen: false
        });
    };

    handlePwdOpen() {
        this.setState({
            pwdOpen: !this.state.pwdOpen
        });
    };

    handlePwdClose() {
        this.setState({
            pwdOpen: false
        });
    }

    logout() {
        Cookies.remove('isLogin');
        window.location.reload();
    }
}

export default HeaderController;