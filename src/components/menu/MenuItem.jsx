import React from 'react';
import { MenuItem as MuiMenuItem } from 'material-ui';

class MenuItem extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiMenuItem {...others}>{children}</MuiMenuItem>;
    }
}

export default MenuItem;