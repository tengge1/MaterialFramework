import React from 'react';
import {DialogTitle as MaterialDialogTitle} from 'material-ui';

class DialogTitle extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDialogTitle {...others}>{children}</MaterialDialogTitle>;
    }
}

export default DialogTitle;