import React from 'react';
import { Typography as MaterialTypography } from 'material-ui';

class Typography extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <MaterialTypography {...others}>{children}</MaterialTypography>;
    }
}

export default Typography;