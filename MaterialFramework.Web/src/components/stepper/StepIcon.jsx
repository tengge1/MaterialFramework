import React from 'react';
import { StepIcon as MaterialStepIcon } from 'material-ui';

class StepIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStepIcon {...others}>{children}</MaterialStepIcon>;
    }
}

export default StepIcon;