import React from 'react';
import { Collapse as MuiCollapse } from 'material-ui';

class Collapse extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiCollapse {...others}>{children}</MuiCollapse>;
    }
}

export default Collapse;