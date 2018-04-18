import React from 'react';
import {FormGroup as MaterialFormGroup} from 'material-ui';

class FormGroup extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormGroup {...others}>{children}</MaterialFormGroup>;
    }
}

export default FormGroup;