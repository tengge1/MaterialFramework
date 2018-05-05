import React from 'react';
import { Menu as MaterialMenu } from 'material-ui';

class Menu extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialMenu {...others}>{children}</MaterialMenu>;
    }
}

export default Menu;