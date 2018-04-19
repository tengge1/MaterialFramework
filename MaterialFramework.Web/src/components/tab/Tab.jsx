import React from 'react';
import { Tab as MaterialTab } from 'material-ui';

class Tab extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTab {...others}>{children}</MaterialTab>;
    }
}

export default Tab;