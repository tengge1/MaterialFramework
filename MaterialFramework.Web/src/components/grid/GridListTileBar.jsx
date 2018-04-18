import React from 'react';
import { GridListTileBar as MaterialGridListTileBar } from 'material-ui';

class GridListTileBar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialGridListTileBar {...others}>{children}</MaterialGridListTileBar>;
    }
}

export default GridListTileBar;