import React from 'react';
import { Dialog as MuiDialog } from 'material-ui';

class Dialog extends React.Component {
    render() {
        const {
            disableBackdropClick,
            children,
            ...others
        } = this.props;
        return <MuiDialog disableBackdropClick={disableBackdropClick === false ? false : true} {...others}>{children}</MuiDialog>;
    }
}

export default Dialog;