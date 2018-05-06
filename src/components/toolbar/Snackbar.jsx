import React from 'react';
import { Snackbar as MuiSnackbar } from 'material-ui';

class Snackbar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSnackbar {...others}>{children}</MuiSnackbar>;
    }
}

export default Snackbar;