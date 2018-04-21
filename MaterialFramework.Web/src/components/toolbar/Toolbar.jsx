import React from 'react';
import { Toolbar as MaterialToolbar } from 'material-ui';

class Toolbar extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialToolbar {...others}>{children}</MaterialToolbar>
    }
}

export default Toolbar;