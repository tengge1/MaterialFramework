import React from 'react';
import {BottomNavigationAction as MaterialBottomNavigationAction} from 'material-ui';

class BottomNavigationAction extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialBottomNavigationAction {...others}>{children}</MaterialBottomNavigationAction>;
    }
}

export default BottomNavigationAction;