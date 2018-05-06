import React from 'react';
import { MenuList as MuiMenuList } from 'material-ui';

class MenuList extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiMenuList {...others}>{children}</MuiMenuList>;
    }
}

export default MenuList;