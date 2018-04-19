import React from 'react';
import { Icon as MaterialIcon } from 'material-ui';

class Icon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialIcon {...others}>{children}</MaterialIcon>;
    }
}

export default Icon;