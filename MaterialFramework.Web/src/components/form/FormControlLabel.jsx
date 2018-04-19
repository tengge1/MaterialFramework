import React from 'react';
import { FormControlLabel as MaterialFormControlLabel } from 'material-ui';

class FormControlLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormControlLabel {...others}>{children}</MaterialFormControlLabel>;
    }
}

export default FormControlLabel;