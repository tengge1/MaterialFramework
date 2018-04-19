import React from 'react';
import {Snackbar as MaterialSnackbar} from 'material-ui';

class Snackbar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSnackbar {...others}>{children}</MaterialSnackbar>;
    }
}

export default Snackbar;