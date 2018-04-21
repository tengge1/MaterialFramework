import React from 'react';
import Placeholder from './Placeholder';

class Column extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return <Placeholder>
            {children}
        </Placeholder>;
    }
}

export default Column;