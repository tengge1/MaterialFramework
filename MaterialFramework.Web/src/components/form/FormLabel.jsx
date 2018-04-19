import React from 'react';
import { FormLabel as MaterialFormLabel } from 'material-ui';

class FormLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormLabel {...others}>{children}</MaterialFormLabel>;
    }
}

export default FormLabel;