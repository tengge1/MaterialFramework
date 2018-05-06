import React from 'react';
import { MuiThemeProvider as MuiMuiThemeProvider } from 'material-ui';

class MuiThemeProvider extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiMuiThemeProvider {...others}>{children}</MuiMuiThemeProvider>;
    }
}

export default MuiThemeProvider;