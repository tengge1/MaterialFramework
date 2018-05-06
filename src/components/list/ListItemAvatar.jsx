import React from 'react';
import { ListItemAvatar as MuiListItemAvatar } from 'material-ui';

class ListItemAvatar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListItemAvatar {...others}>{children}</MuiListItemAvatar>;
    }
}

export default ListItemAvatar;