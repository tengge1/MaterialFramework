import React from 'react';
import { Slide as MuiSlide } from 'material-ui';

class Slide extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiSlide {...others}>{children}</MuiSlide>;
    }
}

export default Slide;