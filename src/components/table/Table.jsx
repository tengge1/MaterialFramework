import React from 'react';
import { Table as MuiTable } from 'material-ui';

class Table extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTable {...others}>{children}</MuiTable>;
    }
}

export default Table;