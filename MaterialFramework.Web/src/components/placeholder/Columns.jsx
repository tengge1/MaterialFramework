import React from 'react';
import Placeholder from './Placeholder';

class Columns extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return <Placeholder>
            {children}
        </Placeholder>;
    }
}

export default Columns;