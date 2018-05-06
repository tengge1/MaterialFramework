import React from 'react';
import { Divider as MuiDivider } from 'material-ui';

class Divider extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiDivider {...others}>{children}</MuiDivider>;
    }
}

export default Divider;