import React from 'react';
import { TableSortLabel as MaterialTableSortLabel } from 'material-ui';

class TableSortLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableSortLabel {...others}>{children}</MaterialTableSortLabel>;
    }
}

export default TableSortLabel;