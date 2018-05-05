import React from 'react';
import { CircularProgress as MaterialCircularProgress } from 'material-ui';

class CircularProgress extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MaterialCircularProgress {...others} />;
    }
}

export default CircularProgress;