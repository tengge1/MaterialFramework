import React from 'react';
import { CircularProgress as MuiCircularProgress } from 'material-ui';

class CircularProgress extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MuiCircularProgress {...others} />;
    }
}

export default CircularProgress;