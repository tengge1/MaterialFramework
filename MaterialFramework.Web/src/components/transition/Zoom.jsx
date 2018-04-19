import React from 'react';
import { Zoom as MaterialZoom } from 'material-ui';

class Zoom extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialZoom {...others}>{children}</MaterialZoom>;
    }
}

export default Zoom;