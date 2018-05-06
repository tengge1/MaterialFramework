import React from 'react';
import { BottomNavigation as MuiBottomNavigation } from 'material-ui';

class BottomNavigation extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiBottomNavigation {...others}>{children}</MuiBottomNavigation>;
    }
}

export default BottomNavigation;