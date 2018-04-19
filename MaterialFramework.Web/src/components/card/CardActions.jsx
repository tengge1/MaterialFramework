import React from 'react';
import { CardActions as MaterialCardActions } from 'material-ui';

class CardActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCardActions {...others}>{children}</MaterialCardActions>;
    }
}

export default CardActions;