import React from 'react';
import {Button} from './Button.jsx';

class RoundButton extends React.Component {
    render() {
        const {
            children,
            ...others
        } = this.props;
        return <Button variant={'fab'} {...others}>{children}</Button>;
    }
}

export {RoundButton};