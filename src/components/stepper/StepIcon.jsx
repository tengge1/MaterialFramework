import React from 'react';
import { StepIcon as MuiStepIcon } from 'material-ui';

class StepIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStepIcon {...others}>{children}</MuiStepIcon>;
    }
}

export default StepIcon;