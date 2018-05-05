import React from 'react';
import { ListItemIcon as MaterialListItemIcon } from 'material-ui';

class ListItemIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListItemIcon {...others}>{children}</MaterialListItemIcon>;
    }
}

export default ListItemIcon;