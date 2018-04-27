import React from 'react';
import {
    Dialog, DialogHead, DialogBody, DialogActions, Button, withStyles,
    FormControl, FormLabel, Input
} from '../../../components/Components';

const styles = theme => ({
    root: {
        // width: 800,
        // height: 500
    }
});

class LogView extends React.Component {

    handleClose = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }

    render() {
        const { open, classes } = this.props;

        return <Dialog open={open} className={classes.root}>
            <DialogHead onClose={this.handleClose}>日志查看</DialogHead>
            <DialogBody>
                <FormControl>
                    <FormLabel>原密码</FormLabel>
                    <Input type={'password'} />
                </FormControl>
                <FormControl>
                    <FormLabel>新密码</FormLabel>
                    <Input type={'password'} />
                </FormControl>
                <FormControl>
                    <FormLabel>确认密码</FormLabel>
                    <Input type={'password'} />
                </FormControl>
            </DialogBody>
            <DialogActions>
                <Button onClick={this.handleClose}>关闭</Button>
            </DialogActions>
        </Dialog>;
    }
}

export default withStyles(styles)(LogView);