import React from 'react';
import { Tabs as MaterialTabs } from 'material-ui';

class Tabs extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTabs {...others}>{children}</MaterialTabs>;
    }
}

export default Tabs;