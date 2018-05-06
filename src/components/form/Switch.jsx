import React from 'react';
import { Switch as MuiSwitch } from 'material-ui';

class Switch extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSwitch {...others}>{children}</MuiSwitch>;
    }
}

export default Switch;