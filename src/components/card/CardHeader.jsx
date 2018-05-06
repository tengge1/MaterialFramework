import React from 'react';
import { CardHeader as MaterialCardHeader } from 'material-ui';

class CardHeader extends React.Component {
    render() {
        const {
            children,
            title,
            ...others
        } = this.props;

        return <MaterialCardHeader title={title ? title : children} {...others}></MaterialCardHeader>;
    }
}

export default CardHeader;