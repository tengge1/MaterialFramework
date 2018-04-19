import React from 'react';
import { MobileStepper as MaterialMobileStepper } from 'material-ui';

class MobileStepper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialMobileStepper {...others}>{children}</MaterialMobileStepper>;
    }
}

export default MobileStepper;