import React from 'react';
import { FormGroup as MuiFormGroup } from 'material-ui';

class FormGroup extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiFormGroup {...others}>{children}</MuiFormGroup>;
    }
}

export default FormGroup;