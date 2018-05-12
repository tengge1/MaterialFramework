import React from 'react';

class Form extends React.Component {

    render() {
        const { children, ...others } = this.props;

        return <form {...others}>{children}</form>;
    }
}

export default Form;