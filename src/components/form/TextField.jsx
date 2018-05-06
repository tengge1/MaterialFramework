import React from 'react';
import { TextField as MuiTextField } from 'material-ui';

class TextField extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiTextField {...others}>{children}</MuiTextField>;
    }
}

export default TextField;