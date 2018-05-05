import React from 'react';
import Column from './Column';

class RowNumber extends React.Component {
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

export default RowNumber;