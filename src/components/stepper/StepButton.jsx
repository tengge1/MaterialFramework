import React from 'react';
import { StepButton as MuiStepButton } from 'material-ui';

class StepButton extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStepButton {...others}>{children}</MuiStepButton>;
    }
}

export default StepButton;