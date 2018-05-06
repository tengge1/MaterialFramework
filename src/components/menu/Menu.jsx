import React from 'react';
import { Menu as MuiMenu } from 'material-ui';

class Menu extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiMenu {...others}>{children}</MuiMenu>;
    }
}

export default Menu;