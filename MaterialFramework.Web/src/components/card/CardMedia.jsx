import React from 'react';
import {CardMedia as MaterialCardMedia} from 'material-ui';

class CardMedia extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MaterialCardMedia {...others}>{children}</MaterialCardMedia>;
    }
}

export default CardMedia;