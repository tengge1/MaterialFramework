import React from 'react';
import { ExpansionPanel as MaterialExpansionPanel } from 'material-ui';

class ExpansionPanel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialExpansionPanel {...others}>{children}</MaterialExpansionPanel>;
    }
}

export default ExpansionPanel;