import React from 'react';
import Snackbar from '../toolbar/Snackbar';
import Slide from '../transition/Slide';

class Msg extends React.Component {
    handleClose = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    };

    render() {
        const { open, children, ...others } = this.props;
        return <Snackbar
            open={open}
            message={children}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={3000}
            transition={Slide}
            onClose={this.handleClose}
            {...others} />;
    }

}

export default Msg;