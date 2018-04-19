import React from 'react';
import { Tooltip as MaterialTooltip } from 'material-ui';

class Tooltip extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTooltip {...others}>{children}</MaterialTooltip>;
    }
}

export default Tooltip;