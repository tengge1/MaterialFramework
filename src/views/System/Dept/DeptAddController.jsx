class DeptAddController {
    state = {
        successMsgOpen: false,
        PID: 1
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

    onSelectPDept(event) {
        this.setState({
            PID: event.target.value
        });
    }
}

export default DeptAddController;