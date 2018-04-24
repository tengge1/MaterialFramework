import React from 'react';
import { Dialog, DialogActions, DialogContent, Button, AppBar, Toolbar, FormControl, FormLabel, Input } from '../../components/Components';

class ChangePwdWin extends React.Component {

    handleOK = () => {

    };

    handleClose = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    };

    render() {
        const { open, ...others } = this.props;

        const content = <DialogContent>
            <FormControl fullWidth={true}>
                <FormLabel>原密码</FormLabel>
                <Input />
            </FormControl>
            <FormControl fullWidth={true}>
                <FormLabel>新密码</FormLabel>
                <Input />
            </FormControl>
            <FormControl fullWidth={true}>
                <FormLabel>确认密码</FormLabel>
                <Input />
            </FormControl>
        </DialogContent>;

        return <Dialog open={open} {...others}>
            <AppBar>
                <Toolbar>修改密码</Toolbar>
            </AppBar>
            {content}
            <DialogActions>
                <Button color={'primary'}>确定</Button>
                <Button onClick={this.handleClose}>取消</Button>
            </DialogActions>
        </Dialog>;
    }

}

export default ChangePwdWin;