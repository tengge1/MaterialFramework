import React from 'react';
import Placeholder from './Placeholder.jsx';

class Header extends React.Component {
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

export default Header;