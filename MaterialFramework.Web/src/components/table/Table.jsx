import React from 'react';
import { Table as MaterialTable } from 'material-ui';

class Table extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTable {...others}>{children}</MaterialTable>;
    }
}

export default Table;