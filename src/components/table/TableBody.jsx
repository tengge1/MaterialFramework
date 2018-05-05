import React from 'react';
import { TableBody as MaterialTableBody } from 'material-ui';

class TableBody extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableBody {...others}>{children}</MaterialTableBody>;
    }
}

export default TableBody;