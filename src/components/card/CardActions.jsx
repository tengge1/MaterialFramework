import React from 'react';
import { CardActions as MuiCardActions } from 'material-ui';

class CardActions extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiCardActions {...others}>{children}</MuiCardActions>;
    }
}

export default CardActions;