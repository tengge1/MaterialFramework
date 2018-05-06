import React from 'react';
import { TableHead as MuiTableHead } from 'material-ui';

class TableHead extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableHead {...others}>{children}</MuiTableHead>;
    }
}

export default TableHead;