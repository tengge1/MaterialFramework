import React from 'react';
import { ListItemIcon as MuiListItemIcon } from 'material-ui';

class ListItemIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListItemIcon {...others}>{children}</MuiListItemIcon>;
    }
}

export default ListItemIcon;