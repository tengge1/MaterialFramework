import React from 'react';
import { StepContent as MuiStepContent } from 'material-ui';

class StepContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStepContent {...others}>{children}</MuiStepContent>;
    }
}

export default StepContent;