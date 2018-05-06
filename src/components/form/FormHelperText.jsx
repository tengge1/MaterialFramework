import React from 'react';
import { FormHelperText as MuiFormHelperText } from 'material-ui';

class FormHelperText extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiFormHelperText {...others}>{children}</MuiFormHelperText>;
    }
}

export default FormHelperText;