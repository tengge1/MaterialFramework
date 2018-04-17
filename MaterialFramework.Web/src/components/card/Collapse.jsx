import React from 'react';
import { Collapse as MaterialCollapse } from 'material-ui';

class Collapse extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCollapse {...others}>{children}</MaterialCollapse>;
    }
}

export default Collapse;