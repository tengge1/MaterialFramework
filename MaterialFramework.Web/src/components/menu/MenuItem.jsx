import React from 'react';
import { MenuItem as MaterialMenuItem } from 'material-ui';

class MenuItem extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialMenuItem {...others}>{children}</MaterialMenuItem>;
    }
}

export default MenuItem;