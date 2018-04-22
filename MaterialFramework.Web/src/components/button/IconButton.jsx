import React from 'react';
import { IconButton as MaterialIconButton } from 'material-ui';
import { Home } from 'material-ui-icons';

class IconButton extends React.Component {
    render() {
        const {
            // disableRipple,
            children,
            ...others
        } = this.props;

        return <MaterialIconButton
            // disableRipple={true}
            {...others}>{children || <Home />}</MaterialIconButton>;
    }
}

export default IconButton;