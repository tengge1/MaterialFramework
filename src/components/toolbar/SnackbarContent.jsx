import React from 'react';
import { SnackbarContent as MuiSnackbarContent } from 'material-ui';

class SnackbarContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSnackbarContent {...others}>{children}</MuiSnackbarContent>;
    }
}

export default SnackbarContent;