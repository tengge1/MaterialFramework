import React from 'react';
import { TableRow as MuiTableRow } from 'material-ui';

class TableRow extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableRow {...others}>{children}</MuiTableRow>;
    }
}

export default TableRow;