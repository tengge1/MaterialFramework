import React from 'react';
import { FormHelperText as MaterialFormHelperText } from 'material-ui';

class FormHelperText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialFormHelperText {...others}>{children}</MaterialFormHelperText>;
    }
}

export default FormHelperText;