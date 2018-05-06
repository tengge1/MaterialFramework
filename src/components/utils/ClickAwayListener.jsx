import React from 'react';
import { ClickAwayListener as MuiClickAwayListener } from 'material-ui';

class ClickAwayListener extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiClickAwayListener {...others}>{children}</MuiClickAwayListener>;
    }
}

export default ClickAwayListener;