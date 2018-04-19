import React from 'react';
import { Stepper as MaterialStepper } from 'material-ui';

class Stepper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStepper {...others}>{children}</MaterialStepper>;
    }
}

export default Stepper;