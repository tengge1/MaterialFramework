import React from 'react';
import { ListItem as MaterialListItem } from 'material-ui';

class ListItem extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListItem {...others}>{children}</MaterialListItem>;
    }
}

export default ListItem;