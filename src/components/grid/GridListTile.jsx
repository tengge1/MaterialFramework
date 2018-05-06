import React from 'react';
import { GridListTile as MuiGridListTile } from 'material-ui';

class GridListTile extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiGridListTile {...others}>{children}</MuiGridListTile>;
    }
}

export default GridListTile;