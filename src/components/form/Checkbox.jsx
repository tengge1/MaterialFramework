import React from 'react';
import { Checkbox as MuiCheckbox } from 'material-ui';

class Checkbox extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MuiCheckbox {...others} />;
    }
}

export default Checkbox;