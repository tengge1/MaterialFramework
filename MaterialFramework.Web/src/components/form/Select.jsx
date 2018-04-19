import React from 'react';
import { Select as MaterialSelect } from 'material-ui';

class Select extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSelect {...others}>{children}</MaterialSelect>;
    }
}

export default Select;