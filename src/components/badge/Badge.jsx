import React from 'react';
import { Badge as MuiBadge } from 'material-ui';

class Badge extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiBadge {...others}>{children}</MuiBadge>;
    }
}

export default Badge;