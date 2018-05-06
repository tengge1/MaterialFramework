import React from 'react';
import { Stepper as MuiStepper } from 'material-ui';

class Stepper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStepper {...others}>{children}</MuiStepper>;
    }
}

export default Stepper;