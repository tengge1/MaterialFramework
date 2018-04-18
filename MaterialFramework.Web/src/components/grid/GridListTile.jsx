import React from 'react';
import { GridListTile as MaterialGridListTile } from 'material-ui';

class GridListTile extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialGridListTile {...others}>{children}</MaterialGridListTile>;
    }
}

export default GridListTile;