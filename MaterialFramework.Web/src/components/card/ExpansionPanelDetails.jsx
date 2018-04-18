import React from 'react';
import {ExpansionPanelDetails as MaterialExpansionPanelDetails} from 'material-ui';

class ExpansionPanelDetails extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialExpansionPanelDetails {...others}>{children}</MaterialExpansionPanelDetails>;
    }
}

export default ExpansionPanelDetails;