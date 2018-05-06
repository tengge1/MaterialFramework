import React from 'react';
import { Tabs as MuiTabs } from 'material-ui';

class Tabs extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiTabs {...others}>{children}</MuiTabs>;
    }
}

export default Tabs;