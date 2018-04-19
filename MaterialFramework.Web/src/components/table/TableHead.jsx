import React from 'react';
import { Table as MaterialTableHead } from 'material-ui';

class TableHead extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableHead {...others}>{children}</MaterialTableHead>;
    }
}

export default TableHead;