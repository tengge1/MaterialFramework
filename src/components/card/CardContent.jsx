import React from 'react';
import { CardContent as MuiCardContent } from 'material-ui';

class CardContent extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;

        return <MuiCardContent {...others}>{children}</MuiCardContent>;
    }
}

export default CardContent;