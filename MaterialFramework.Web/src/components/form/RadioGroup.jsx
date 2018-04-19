import React from 'react';
import { RadioGroup as MaterialRadioGroup } from 'material-ui';

class RadioGroup extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialRadioGroup {...others}>{children}</MaterialRadioGroup>;
    }
}

export default RadioGroup;