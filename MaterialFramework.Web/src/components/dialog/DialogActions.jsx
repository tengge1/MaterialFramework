import React from 'react';
import { DialogActions as MaterialDialogActions } from 'material-ui';

class DialogActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDialogActions {...others}>{children}</MaterialDialogActions>;
    }
}

export default DialogActions;