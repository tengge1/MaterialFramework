import React from 'react';
import { Checkbox as MaterialCheckbox } from 'material-ui';

class Checkbox extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MaterialCheckbox {...others} />;
    }
}

export default Checkbox;