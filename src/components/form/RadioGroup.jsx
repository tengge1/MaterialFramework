import React from 'react';
import { RadioGroup as MuiRadioGroup } from 'material-ui';

class RadioGroup extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiRadioGroup {...others}>{children}</MuiRadioGroup>;
    }
}

export default RadioGroup;