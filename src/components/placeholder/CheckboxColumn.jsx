import React from 'react';
import Column from './Column.jsx';

class CheckboxColumn extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <Column {...others}>
            {children}
        </Column>;
    }
}

export default CheckboxColumn;