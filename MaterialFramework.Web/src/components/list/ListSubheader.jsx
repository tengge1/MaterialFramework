import React from 'react';
import { ListSubheader as MaterialListSubheader } from 'material-ui';

class ListSubheader extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialListSubheader {...others}>{children}</MaterialListSubheader>;
    }
}

export default ListSubheader;