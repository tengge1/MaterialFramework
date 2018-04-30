import Cookies from 'js-cookie';
import NavMenu from '../../menus/NavMenu';
import Event from '../../event/Event';

class HeaderController {
    state = {
        msgOpen: false,
        pwdOpen: false,
        currentNavId: 1
    };

    navMenu = NavMenu;

    handleNavClick(id, name, path, children) {
        this.setState({
            currentNavId: id
        });
        Event.call('selectNavMenu', this, id, name, path, children);
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