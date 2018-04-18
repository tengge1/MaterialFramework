import React from 'react';
import { ListItemSecondaryAction as MaterialListItemSecondaryAction } from 'material-ui';

class ListItemSecondaryAction extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListItemSecondaryAction {...others}>{children}</MaterialListItemSecondaryAction>;
    }
}

export default ListItemSecondaryAction;