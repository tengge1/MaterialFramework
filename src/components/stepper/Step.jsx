import React from 'react';
import { Step as MuiStep } from 'material-ui';

class Step extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiStep {...others}>{children}</MuiStep>;
    }
}

export default Step;