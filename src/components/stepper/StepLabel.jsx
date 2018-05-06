import React from 'react';
import { StepLabel as MuiStepLabel } from 'material-ui';

class StepLabel extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStepLabel {...others}>{children}</MuiStepLabel>;
    }
}

export default StepLabel;