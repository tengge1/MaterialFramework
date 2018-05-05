import React from 'react';
import { TableRow as MaterialTableRow } from 'material-ui';

class TableRow extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableRow {...others}>{children}</MaterialTableRow>;
    }
}

export default TableRow;