import React from 'react';
import { DialogContent as MuiDialogContent } from 'material-ui';

class DialogContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiDialogContent {...others}>{children}</MuiDialogContent>;
    }
}

export default DialogContent;