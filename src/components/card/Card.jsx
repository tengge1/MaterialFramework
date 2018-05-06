import React from 'react';
import { Card as MuiCard } from 'material-ui';

class Card extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiCard {...others}>{children}</MuiCard>;
    }
}

export default Card;