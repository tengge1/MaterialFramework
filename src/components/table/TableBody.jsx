import React from 'react';
import { TableBody as MuiTableBody } from 'material-ui';

class TableBody extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTableBody {...others}>{children}</MuiTableBody>;
    }
}

export default TableBody;