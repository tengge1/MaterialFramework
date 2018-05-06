import React from 'react';
import { ListItemSecondaryAction as MuiListItemSecondaryAction } from 'material-ui';

class ListItemSecondaryAction extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListItemSecondaryAction {...others}>{children}</MuiListItemSecondaryAction>;
    }
}

export default ListItemSecondaryAction;