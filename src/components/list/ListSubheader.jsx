import React from 'react';
import { ListSubheader as MuiListSubheader } from 'material-ui';

class ListSubheader extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiListSubheader {...others}>{children}</MuiListSubheader>;
    }
}

export default ListSubheader;