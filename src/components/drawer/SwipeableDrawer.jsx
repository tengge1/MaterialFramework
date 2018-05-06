import React from 'react';
import { SwipeableDrawer as MuiSwipeableDrawer } from 'material-ui';

class SwipeableDrawer extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSwipeableDrawer {...others}>{children}</MuiSwipeableDrawer>;
    }
}

export default SwipeableDrawer;