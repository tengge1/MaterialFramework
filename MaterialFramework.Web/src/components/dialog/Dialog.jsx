import React from 'react';
import { Dialog as MaterialDialog } from 'material-ui';

class Dialog extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDialog {...others}>{children}</MaterialDialog>;
    }
}

export default Dialog;