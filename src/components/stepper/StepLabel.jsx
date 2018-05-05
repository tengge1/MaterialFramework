import React from 'react';
import { StepLabel as MaterialStepLabel } from 'material-ui';

class StepLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStepLabel {...others}>{children}</MaterialStepLabel>;
    }
}

export default StepLabel;