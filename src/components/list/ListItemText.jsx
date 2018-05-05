import React from 'react';
import { ListItemText as MaterialListItemText } from 'material-ui';

class ListItemText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListItemText {...others}>{children}</MaterialListItemText>;
    }
}

export default ListItemText;