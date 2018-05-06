import React from 'react';
import { Input as MuiFormInput } from 'material-ui';

class Input extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiFormInput {...others}>{children}</MuiFormInput>;
    }
}

export default Input;