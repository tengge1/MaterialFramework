import React from 'react';
import {ExpansionPanelActions as MaterialExpansionPanelActions} from 'material-ui';

class ExpansionPanelActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialExpansionPanelActions {...others}>{children}</MaterialExpansionPanelActions>;
    }
}

export default ExpansionPanelActions;