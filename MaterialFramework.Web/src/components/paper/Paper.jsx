import React from 'react';
import { Paper as MaterialPaper } from 'material-ui';

class Paper extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialPaper {...others}>{children}</MaterialPaper>;
    }
}

export default Paper;