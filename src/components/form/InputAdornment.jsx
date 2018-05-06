import React from 'react';
import { InputAdornment as MuiInputAdornment } from 'material-ui';

class InputAdornment extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiInputAdornment {...others}>{children}</MuiInputAdornment>;
    }
}

export default InputAdornment;