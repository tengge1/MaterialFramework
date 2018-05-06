import React from 'react';
import { Modal as MuiModal } from 'material-ui';

class Modal extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiModal {...others}>{children}</MuiModal>;
    }
}

export default Modal;