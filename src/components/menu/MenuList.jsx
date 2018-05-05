import React from 'react';
import { MenuList as MaterialMenuList } from 'material-ui';

class MenuList extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialMenuList {...others}>{children}</MaterialMenuList>;
    }
}

export default MenuList;