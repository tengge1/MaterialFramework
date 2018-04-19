import React from 'react';
import { Divider as MaterialDivider } from 'material-ui';

class Divider extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialDivider {...others}>{children}</MaterialDivider>;
    }
}

export default Divider;