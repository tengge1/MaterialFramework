import React from 'react';
import { BottomNavigation as MaterialBottomNavigation } from 'material-ui';

class BottomNavigation extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialBottomNavigation {...others}>{children}</MaterialBottomNavigation>;
    }
}

export default BottomNavigation;