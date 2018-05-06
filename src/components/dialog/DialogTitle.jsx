import React from 'react';
import { DialogTitle as MuiDialogTitle } from 'material-ui';

class DialogTitle extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiDialogTitle {...others}>{children}</MuiDialogTitle>;
    }
}

export default DialogTitle;