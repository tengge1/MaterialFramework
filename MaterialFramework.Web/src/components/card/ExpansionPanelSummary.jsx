import React from 'react';
import { ExpansionPanelSummary as MaterialExpansionPanelSummary } from 'material-ui';

class ExpansionPanelSummary extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialExpansionPanelSummary {...others}>{children}</MaterialExpansionPanelSummary>;
    }
}

export default ExpansionPanelSummary;