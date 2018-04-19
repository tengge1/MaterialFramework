import React from 'react';
import { Radio as MaterialRadio } from 'material-ui';

class Radio extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialRadio {...others}>{children}</MaterialRadio>;
    }
}

export default Radio;