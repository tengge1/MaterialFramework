import React from 'react';
import { CssBaseline as MaterialCssBaseline } from 'material-ui';

class CssBaseline extends React.Component {
    render() {
        const {
            ...others
        } = this.props;

        return <MaterialCssBaseline {...others} />;
    }
}

export default CssBaseline;