import React from 'react';
import {DialogContent as MaterialDialogContent} from 'material-ui';

class DialogContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDialogContent {...others}>{children}</MaterialDialogContent>;
    }
}

export default DialogContent;