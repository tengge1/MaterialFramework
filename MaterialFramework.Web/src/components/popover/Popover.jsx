import React from 'react';
import { Popover as MaterialPopover } from 'material-ui';

class Popover extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialPopover {...others}>{children}</MaterialPopover>;
    }
}

export default Popover;