import React from 'react';
import { DialogContentText as MuiDialogContentText } from 'material-ui';

class DialogContentText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiDialogContentText {...others}>{children}</MuiDialogContentText>;
    }
}

export default DialogContentText;