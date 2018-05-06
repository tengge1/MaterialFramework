import React from 'react';
import { Paper as MuiPaper } from 'material-ui';

class Paper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiPaper {...others}>{children}</MuiPaper>;
    }
}

export default Paper;