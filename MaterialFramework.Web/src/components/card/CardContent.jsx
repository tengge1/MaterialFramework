import React from 'react';
import { CardContent as MaterialCardContent } from 'material-ui';

class CardContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCardContent {...others}>{children}</MaterialCardContent>;
    }
}

export default CardContent;