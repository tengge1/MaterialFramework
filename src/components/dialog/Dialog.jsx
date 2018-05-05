import React from 'react';
import { Dialog as MaterialDialog } from 'material-ui';

class Dialog extends React.Component {
    render() {
        const {
            disableBackdropClick,
            children,
            ...others
        } = this.props;
        return <MaterialDialog disableBackdropClick={disableBackdropClick === false ? false : true} {...others}>{children}</MaterialDialog>;
    }
}

export default Dialog;