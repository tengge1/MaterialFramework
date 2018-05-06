import React from 'react';
import { GridListTileBar as MuiGridListTileBar } from 'material-ui';

class GridListTileBar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiGridListTileBar {...others}>{children}</MuiGridListTileBar>;
    }
}

export default GridListTileBar;