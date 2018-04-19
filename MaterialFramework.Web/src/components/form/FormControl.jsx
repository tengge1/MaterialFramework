import React from 'react';
import { FormControl as MaterialFormControl } from 'material-ui';

class FormControl extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormControl {...others}>{children}</MaterialFormControl>;
    }
}

export default FormControl;