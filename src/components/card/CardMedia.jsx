import React from 'react';
import { CardMedia as MuiCardMedia } from 'material-ui';

class CardMedia extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiCardMedia {...others}>{children}</MuiCardMedia>;
    }
}

export default CardMedia;