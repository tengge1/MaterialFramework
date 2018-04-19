import React from 'react';
import { Step as MaterialStep } from 'material-ui';

class Step extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialStep {...others}>{children}</MaterialStep>;
    }
}

export default Step;