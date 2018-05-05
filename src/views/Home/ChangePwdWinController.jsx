class ChangePwdWinController {

    state = {
        msgOpen: false
    };

    oldPassword = '';
    newPassword = '';
    confirmPassword = '';

    handleMsgClose() {
        this.setState({
            msgOpen: false
        });
    };

    handleOK() { // 密码修改成功
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
        this.setState({
            msgOpen: true
        });
    };

    handleClose() {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    };

}

export default ChangePwdWinController;