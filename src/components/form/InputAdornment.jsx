import React from 'react';
import { InputAdornment as MaterialInputAdornment } from 'material-ui';

class InputAdornment extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialInputAdornment {...others}>{children}</MaterialInputAdornment>;
    }
}

export default InputAdornment;