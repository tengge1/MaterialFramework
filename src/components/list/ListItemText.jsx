import React from 'react';
import { ListItemText as MuiListItemText } from 'material-ui';

class ListItemText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListItemText {...others}>{children}</MuiListItemText>;
    }
}

export default ListItemText;