import React from 'react';
import { TableSortLabel as MuiTableSortLabel } from 'material-ui';

class TableSortLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableSortLabel {...others}>{children}</MuiTableSortLabel>;
    }
}

export default TableSortLabel;