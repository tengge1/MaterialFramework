import React from 'react';
import {
    Dialog, DialogActions, DialogHead, DialogBody, Button, FormControl, FormLabel, Input, Snackbar, SnackbarContent
} from '../../components/Components';

class ChangePwdWin extends React.Component {

    state = {
        msgOpen: false
    };

    oldPassword = '';
    newPassword = '';
    confirmPassword = '';

    handleOK = () => {
        this.setState({
            msgOpen: true
        });
    };

    handleClose = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    };

    render() {
        const { open, ...others } = this.props;

        return <React.Fragment>
            <Dialog open={open} {...others}>
                <DialogHead onClose={this.handleClose}>修改密码</DialogHead>
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
                    <Button color={'primary'} onClick={this.handleOK}>确定</Button>
                    <Button onClick={this.handleClose}>取消</Button>
                </DialogActions>
            </Dialog>
            <Snackbar center={true} open={this.state.msgOpen}>
                <SnackbarContent>密码修改成功！</SnackbarContent>
            </Snackbar>
        </React.Fragment>;
    }
}

export default ChangePwdWin;