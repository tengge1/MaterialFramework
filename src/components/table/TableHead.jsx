import React from 'react';
import { TableHead as MaterialTableHead } from 'material-ui';

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