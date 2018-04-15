import React from 'react';
import {Grid as MaterialGrid} from 'material-ui';

class Grid extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialGrid {...others}>{children}</MaterialGrid>;
    }
}

export default Grid;