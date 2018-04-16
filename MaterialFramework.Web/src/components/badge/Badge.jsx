import React from 'react';
import {Badge as MaterialBadge} from 'material-ui';

class Badge extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialBadge {...others}>{children}</MaterialBadge>;
    }
}

export default Badge;