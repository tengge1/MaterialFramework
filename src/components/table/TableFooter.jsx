import React from 'react';
import { TableFooter as MuiTableFooter } from 'material-ui';

class TableFooter extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableFooter {...others}>{children}</MuiTableFooter>;
    }
}

export default TableFooter;