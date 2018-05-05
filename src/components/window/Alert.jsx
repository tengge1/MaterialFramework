import React from 'react';
import Dialog from '../dialog/Dialog';
import DialogTitle from '../dialog/DialogTitle';
import DialogContent from '../dialog/DialogContent';
import DialogActions from '../dialog/DialogActions';
import Button from '../button/Button';

class Alert extends React.Component {
    onClose() {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }

    render() {
        const { title, content, open, ...others } = this.props;

        return <Dialog open={open} {...others} onClose={this.onClose.bind(this)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button onClick={this.onClose.bind(this)}>确定</Button>
            </DialogActions>
        </Dialog>;
    }
}

export default Alert;