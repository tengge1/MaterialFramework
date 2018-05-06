import React from 'react';
import { ExpansionPanel as MuiExpansionPanel } from 'material-ui';

class ExpansionPanel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiExpansionPanel {...others}>{children}</MuiExpansionPanel>;
    }
}

export default ExpansionPanel;