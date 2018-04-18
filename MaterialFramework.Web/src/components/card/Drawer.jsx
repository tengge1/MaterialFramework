import React from 'react';
import {Drawer as MaterialDrawer} from 'material-ui';

class Drawer extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialDrawer {...others}>{children}</MaterialDrawer>;
    }
}

export default Drawer;