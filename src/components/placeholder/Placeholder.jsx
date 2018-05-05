import React from 'react';

class Placeholder extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <React.Fragment {...others}>
            {children}
        </React.Fragment>;
    }
}

export default Placeholder;