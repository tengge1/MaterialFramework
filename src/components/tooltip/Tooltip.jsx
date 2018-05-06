import React from 'react';
import { Tooltip as MuiTooltip } from 'material-ui';

class Tooltip extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTooltip {...others}>{children}</MuiTooltip>;
    }
}

export default Tooltip;