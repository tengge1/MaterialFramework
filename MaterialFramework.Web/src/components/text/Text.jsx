import React from 'react';
import Typography from './Typography';

class Text extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <Typography {...others}>{children}</Typography>;
    }
}

export default Text;