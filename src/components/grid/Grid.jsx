import React from 'react';
import { Grid as MuiGrid } from 'material-ui';

class Grid extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiGrid {...others}>{children}</MuiGrid>;
    }
}

export default Grid;