import React from 'react';
import { Slide as MaterialSlide } from 'material-ui';

class Slide extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialSlide {...others}>{children}</MaterialSlide>;
    }
}

export default Slide;