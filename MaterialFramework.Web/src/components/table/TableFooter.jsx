import React from 'react';
import { TableFooter as MaterialTableFooter } from 'material-ui';

class TableFooter extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTableFooter {...others}>{children}</MaterialTableFooter>;
    }
}

export default TableFooter;