import React from 'react';
import { CardHeader as MuiCardHeader } from 'material-ui';

class CardHeader extends React.Component {
    render() {
        const {
            children,
            title,
            ...others
        } = this.props;

        return <MuiCardHeader title={title ? title : children} {...others}></MuiCardHeader>;
    }
}

export default CardHeader;