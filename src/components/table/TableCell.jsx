import React from 'react';
import { TableCell as MuiTableCell } from 'material-ui';

class TableCell extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableCell {...others}>{children}</MuiTableCell>;
    }
}

export default TableCell;