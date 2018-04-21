import React from 'react';
import { TablePagination as MaterialTablePagination } from 'material-ui';

class TablePagination extends React.Component {

    labelDisplayedRows = (info) => {
        return `第${info.from}到${info.to}条，共${info.count}条`;
    }

    labelRowsPerPage = (info) => {
        return <React.Fragment>{`每页条数`}</React.Fragment>;
    }

    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTablePagination labelDisplayedRows={this.labelDisplayedRows} labelRowsPerPage={'每页条数'} {...others}>{children}</MaterialTablePagination>;
    }
}

export default TablePagination;