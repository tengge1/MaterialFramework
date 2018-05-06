import React from 'react';
import { MobileStepper as MuiMobileStepper } from 'material-ui';

class MobileStepper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiMobileStepper {...others}>{children}</MuiMobileStepper>;
    }
}

export default MobileStepper;