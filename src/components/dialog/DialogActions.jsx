import React from 'react';
import { DialogActions as MuiDialogActions } from 'material-ui';

class DialogActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiDialogActions {...others}>{children}</MuiDialogActions>;
    }
}

export default DialogActions;