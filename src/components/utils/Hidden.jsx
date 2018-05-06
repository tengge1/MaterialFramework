import React from 'react';
import { Hidden as MuiHidden } from 'material-ui';

class Hidden extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiHidden {...others}>{children}</MuiHidden>;
    }
}

export default Hidden;