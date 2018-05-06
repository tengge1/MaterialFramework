import React from 'react';
import { Typography as MuiTypography } from 'material-ui';

class Typography extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTypography {...others}>{children}</MuiTypography>;
    }
}

export default Typography;