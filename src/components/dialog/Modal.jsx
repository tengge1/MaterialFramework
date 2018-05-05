import React from 'react';
import { Modal as MaterialModal } from 'material-ui';

class Modal extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialModal {...others}>{children}</MaterialModal>;
    }
}

export default Modal;