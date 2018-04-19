import React from 'react';
import { TableCell as MaterialTableCell } from 'material-ui';

class TableCell extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableCell {...others}>{children}</MaterialTableCell>;
    }
}

export default TableCell;