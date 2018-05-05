import React from 'react';
import { List as MaterialList } from 'material-ui';

class List extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialList {...others}>{children}</MaterialList>;
    }
}

export default List;