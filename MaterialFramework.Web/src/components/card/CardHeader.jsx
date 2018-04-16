import React from 'react';
import {CardHeader as MaterialCardHeader} from 'material-ui';

class CardHeader extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCardHeader {...others}>{children}</MaterialCardHeader>;
    }
}

export default CardHeader;