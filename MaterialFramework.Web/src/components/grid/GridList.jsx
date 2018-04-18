import React from 'react';
import { GridList as MaterialGridList } from 'material-ui';

class GridList extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialGridList {...others}>{children}</MaterialGridList>;
    }
}

export default GridList;