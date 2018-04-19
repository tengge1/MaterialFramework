import React from 'react';
import { SvgIcon as MaterialSvgIcon } from 'material-ui';

class SvgIcon extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialSvgIcon {...others}>{children}</MaterialSvgIcon>;
    }
}

export default SvgIcon;