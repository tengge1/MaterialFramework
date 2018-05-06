import React from 'react';
import { Grow as MuiGrow } from 'material-ui';

class Grow extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiGrow {...others}>{children}</MuiGrow>;
    }
}

export default Grow;