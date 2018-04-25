import React from 'react';
import { Snackbar as MaterialSnackbar } from 'material-ui';

class Snackbar extends React.Component {
    render() {
        const {
            children,
            center,
            anchorOrigin,
            ...others
        } = this.props;

        return <MaterialSnackbar
            anchorOrigin={center === true ? { vertical: 'center', horizontal: 'center' } : anchorOrigin}
            {...others}>{children}</MaterialSnackbar>;
    }
}

export default Snackbar;