import React from 'react';
import { StepButton as MaterialStepButton } from 'material-ui';

class StepButton extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStepButton {...others}>{children}</MaterialStepButton>;
    }
}

export default StepButton;