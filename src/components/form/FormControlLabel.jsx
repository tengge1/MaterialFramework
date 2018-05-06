import React from 'react';
import { FormControlLabel as MuiFormControlLabel } from 'material-ui';

class FormControlLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiFormControlLabel {...others}>{children}</MuiFormControlLabel>;
    }
}

export default FormControlLabel;