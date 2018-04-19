import React from 'react';
import { TextField as MaterialTextField } from 'material-ui';

class TextField extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialTextField {...others}>{children}</MaterialTextField>;
    }
}

export default TextField;