import React from 'react';
import { StepContent as MaterialStepContent } from 'material-ui';

class StepContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStepContent {...others}>{children}</MaterialStepContent>;
    }
}

export default StepContent;