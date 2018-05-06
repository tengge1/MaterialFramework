import React from 'react';
import { Tab as MuiTab } from 'material-ui';

class Tab extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTab {...others}>{children}</MuiTab>;
    }
}

export default Tab;