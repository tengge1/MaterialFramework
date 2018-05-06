import React from 'react';
import { SvgIcon as MuiSvgIcon } from 'material-ui';

class SvgIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiSvgIcon {...others}>{children}</MuiSvgIcon>;
    }
}

export default SvgIcon;