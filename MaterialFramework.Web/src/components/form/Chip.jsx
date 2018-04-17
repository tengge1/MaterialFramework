import React from 'react';
import {Chip as MaterialChip} from 'material-ui';

class Chip extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MaterialChip {...others}/>;
    }
}

export default Chip;