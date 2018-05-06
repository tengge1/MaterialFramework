import React from 'react';
import { Radio as MuiRadio } from 'material-ui';

class Radio extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiRadio {...others}>{children}</MuiRadio>;
    }
}

export default Radio;