import React from 'react';
import {DialogContentText as MaterialDialogContentText} from 'material-ui';

class DialogContentText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDialogContentText {...others}>{children}</MaterialDialogContentText>;
    }
}

export default DialogContentText;