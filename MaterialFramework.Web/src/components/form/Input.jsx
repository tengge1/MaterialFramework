import React from 'react';
import { Input as MaterialFormInput } from 'material-ui';

class Input extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormInput {...others}>{children}</MaterialFormInput>;
    }
}

export default Input;