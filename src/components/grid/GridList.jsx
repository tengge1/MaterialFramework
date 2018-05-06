import React from 'react';
import { GridList as MuiGridList } from 'material-ui';

class GridList extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiGridList {...others}>{children}</MuiGridList>;
    }
}

export default GridList;