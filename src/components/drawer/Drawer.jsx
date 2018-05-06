import React from 'react';
import { Drawer as MuiDrawer } from 'material-ui';

class Drawer extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiDrawer {...others}>{children}</MuiDrawer>;
    }
}

export default Drawer;