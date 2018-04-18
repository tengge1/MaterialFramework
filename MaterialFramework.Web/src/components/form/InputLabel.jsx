import React from 'react';
import { InputLabel as MaterialInputLabel } from 'material-ui';

class InputLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialInputLabel {...others}>{children}</MaterialInputLabel>;
    }
}

export default InputLabel;