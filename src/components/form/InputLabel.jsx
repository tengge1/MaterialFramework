import React from 'react';
import { InputLabel as MuiInputLabel } from 'material-ui';

class InputLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiInputLabel {...others}>{children}</MuiInputLabel>;
    }
}

export default InputLabel;