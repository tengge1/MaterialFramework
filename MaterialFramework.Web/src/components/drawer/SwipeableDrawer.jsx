import React from 'react';
import { SwipeableDrawer as MaterialSwipeableDrawer } from 'material-ui';

class SwipeableDrawer extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSwipeableDrawer {...others}>{children}</MaterialSwipeableDrawer>;
    }
}

export default SwipeableDrawer;