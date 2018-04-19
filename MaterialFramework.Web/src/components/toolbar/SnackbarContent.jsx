import React from 'react';
import {SnackbarContent as MaterialSnackbarContent} from 'material-ui';

class SnackbarContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSnackbarContent {...others}>{children}</MaterialSnackbarContent>;
    }
}

export default SnackbarContent;