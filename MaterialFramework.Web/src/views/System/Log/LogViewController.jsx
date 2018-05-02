class LogViewController {
    handleClose() {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }
}

export default LogViewController;