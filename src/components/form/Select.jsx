import React from 'react';
import { Select as MuiSelect } from 'material-ui';

class Select extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSelect {...others}>{children}</MuiSelect>;
    }
}

export default Select;