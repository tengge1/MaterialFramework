import React from 'react';
import { Grow as MaterialGrow } from 'material-ui';

class Grow extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialGrow {...others}>{children}</MaterialGrow>;
    }
}

export default Grow;