import React from 'react';
import { LinearProgress as MaterialLinearProgress } from 'material-ui';

class LinearProgress extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MaterialLinearProgress {...others} />;
    }
}

export default LinearProgress;