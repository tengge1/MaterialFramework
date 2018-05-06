import React from 'react';
import { Fade as MuiFade } from 'material-ui';

class Fade extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MuiFade {...others}>{children}</MuiFade>;
    }
}

export default Fade;