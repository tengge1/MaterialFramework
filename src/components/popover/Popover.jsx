import React from 'react';
import { Popover as MuiPopover } from 'material-ui';

class Popover extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiPopover {...others}>{children}</MuiPopover>;
    }
}

export default Popover;