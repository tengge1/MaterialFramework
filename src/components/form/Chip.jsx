import React from 'react';
import { Chip as MuiChip } from 'material-ui';

class Chip extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MuiChip {...others} />;
    }
}

export default Chip;