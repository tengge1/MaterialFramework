import React from 'react';
import { ListItem as MuiListItem } from 'material-ui';

class ListItem extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListItem {...others}>{children}</MuiListItem>;
    }
}

export default ListItem;