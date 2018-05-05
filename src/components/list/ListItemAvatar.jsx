import React from 'react';
import { ListItemAvatar as MaterialListItemAvatar } from 'material-ui';

class ListItemAvatar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListItemAvatar {...others}>{children}</MaterialListItemAvatar>;
    }
}

export default ListItemAvatar;