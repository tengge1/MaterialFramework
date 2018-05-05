import React from 'react';
import { ClickAwayListener as MaterialClickAwayListener } from 'material-ui';

class ClickAwayListener extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialClickAwayListener {...others}>{children}</MaterialClickAwayListener>;
    }
}

export default ClickAwayListener;