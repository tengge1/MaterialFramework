import React from 'react';
import { Icon as MuiIcon } from 'material-ui';

class Icon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiIcon {...others}>{children}</MuiIcon>;
    }
}

export default Icon;