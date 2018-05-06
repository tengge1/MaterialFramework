import React from 'react';
import { ExpansionPanelSummary as MuiExpansionPanelSummary } from 'material-ui';

class ExpansionPanelSummary extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiExpansionPanelSummary {...others}>{children}</MuiExpansionPanelSummary>;
    }
}

export default ExpansionPanelSummary;