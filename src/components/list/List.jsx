import React from 'react';
import { List as MuiList } from 'material-ui';

class List extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiList {...others}>{children}</MuiList>;
    }
}

export default List;