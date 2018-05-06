import React from 'react';
import { CssBaseline as MuiCssBaseline } from 'material-ui';

class CssBaseline extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MuiCssBaseline {...others} />;
    }
}

export default CssBaseline;