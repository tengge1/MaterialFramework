import React from 'react';
import { Switch as MaterialSwitch } from 'material-ui';

class Switch extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSwitch {...others}>{children}</MaterialSwitch>;
    }
}

export default Switch;