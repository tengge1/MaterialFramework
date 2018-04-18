import React from 'react';
import { Hidden as MaterialHidden } from 'material-ui';

class Hidden extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialHidden {...others}>{children}</MaterialHidden>;
    }
}

export default Hidden;