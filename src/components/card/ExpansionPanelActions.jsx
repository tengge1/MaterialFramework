import React from 'react';
import { ExpansionPanelActions as MuiExpansionPanelActions } from 'material-ui';

class ExpansionPanelActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiExpansionPanelActions {...others}>{children}</MuiExpansionPanelActions>;
    }
}

export default ExpansionPanelActions;