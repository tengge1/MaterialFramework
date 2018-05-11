import React from 'react';
import Placeholder from './Placeholder.jsx';

class Action extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <Placeholder {...others}>
            {children}
        </Placeholder>;
    }
}

export default Action;