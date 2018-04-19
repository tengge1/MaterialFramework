import React from 'react';
import { MuiThemeProvider as MaterialMuiThemeProvider } from 'material-ui';

class MuiThemeProvider extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialMuiThemeProvider {...others}>{children}</MaterialMuiThemeProvider>;
    }
}

export default MuiThemeProvider;