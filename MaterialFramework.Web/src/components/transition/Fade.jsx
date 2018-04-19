import React from 'react';
import { Fade as MaterialFade } from 'material-ui';

class Fade extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialFade {...others}>{children}</MaterialFade>;
    }
}

export default Fade;