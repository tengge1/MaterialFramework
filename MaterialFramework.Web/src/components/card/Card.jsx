import React from 'react';
import {Card as MaterialCard} from 'material-ui';

class Card extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCard {...others}>{children}</MaterialCard>;
    }
}

export default Card;