import React from 'react';
import { Portal as MuiPortal } from 'material-ui';

class Portal extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiPortal {...others}>{children}</MuiPortal>;
    }
}

export default Portal;