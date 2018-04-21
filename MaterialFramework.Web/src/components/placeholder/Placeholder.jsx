import React from 'react';

class Placeholder extends React.Component {
    render() {
        const {
            children
        } = this.props;

        return <React.Fragment>
            {children}
        </React.Fragment>;
    }
}

export default Placeholder;