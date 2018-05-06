import React from 'react';
import { Zoom as MuiZoom } from 'material-ui';

class Zoom extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiZoom {...others}>{children}</MuiZoom>;
    }
}

export default Zoom;