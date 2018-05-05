import React from 'react';
import classNames from 'classnames';
import Dialog from '../dialog/Dialog';
import DialogTitle from '../dialog/DialogTitle';
import DialogContent from '../dialog/DialogContent';
import DialogActions from '../dialog/DialogActions';
import Button from '../button/Button';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        minWidth: 400
    }
});

class Confirm extends React.Component {
    onOK() {
        const { onOK } = this.props;
        if (onOK) {
            onOK();
        }
    }

    onCancel() {
        const { onCancel } = this.props;
        if (onCancel) {
            onCancel();
        }
    }

    render() {
        const { title, content, open, className, classes } = this.props;

        return <Dialog
            open={open}
            className={classNames(classes.root, className)}
            onClose={this.onCancel.bind(this)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button color={'primary'} onClick={this.onOK.bind(this)}>确定</Button>
                <Button onClick={this.onCancel.bind(this)}>取消</Button>
            </DialogActions>
        </Dialog>;
    }
}

export default withStyles(styles)(Confirm);