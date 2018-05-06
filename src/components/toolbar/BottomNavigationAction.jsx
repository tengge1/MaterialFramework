import React from 'react';
import { BottomNavigationAction as MuiBottomNavigationAction } from 'material-ui';

class BottomNavigationAction extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiBottomNavigationAction {...others}>{children}</MuiBottomNavigationAction>;
    }
}

export default BottomNavigationAction;