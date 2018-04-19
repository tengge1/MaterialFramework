import React from 'react';
import { TablePagination as MaterialTablePagination } from 'material-ui';

class TablePagination extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTablePagination {...others}>{children}</MaterialTablePagination>;
    }
}

export default TablePagination;