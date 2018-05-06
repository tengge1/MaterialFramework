import React from 'react';
import { LinearProgress as MuiLinearProgress } from 'material-ui';

class LinearProgress extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MuiLinearProgress {...others} />;
    }
}

export default LinearProgress;