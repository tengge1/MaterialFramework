import React from 'react';
import Placeholder from './Placeholder';

class BottomBar extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return <Placeholder>
            {children}
        </Placeholder>;
    }
}

export default BottomBar;