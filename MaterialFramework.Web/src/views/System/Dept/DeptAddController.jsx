class DeptAddController {
    state = {
        successMsgOpen: false
    };

    handleOK() {
        const { onClose } = this.props;

        this.setState({
            successMsgOpen: true
        });

        onClose();
    }

    handleSuccessMsgClose() {
        this.setState({
            successMsgOpen: false
        });
    }
}

export default DeptAddController;