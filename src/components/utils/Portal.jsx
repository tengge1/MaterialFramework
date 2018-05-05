import React from 'react';
import { Portal as MaterialPortal } from 'material-ui';

class Portal extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialPortal {...others}>{children}</MaterialPortal>;
    }
}

export default Portal;