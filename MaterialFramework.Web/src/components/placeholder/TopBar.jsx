import React from 'react';
import Placeholder from './Placeholder';

class TopBar extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return <Placeholder>
            {children}
        </Placeholder>;
    }
}

export default TopBar;