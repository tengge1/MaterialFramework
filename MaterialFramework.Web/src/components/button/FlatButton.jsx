import React from 'react';
import {Button} from './Button.jsx';

class FlatButton extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <Button variant={'flat'} {...others}>{children}</Button>;
    }
}

export {FlatButton};