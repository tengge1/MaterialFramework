import React from 'react';
import { ExpansionPanelDetails as MuiExpansionPanelDetails } from 'material-ui';

class ExpansionPanelDetails extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiExpansionPanelDetails {...others}>{children}</MuiExpansionPanelDetails>;
    }
}

export default ExpansionPanelDetails;