import React from 'react';
import {
    Dialog, DialogActions, DialogHead, DialogBody, Button, FormControl, FormLabel, Input
} from '../../components/Components';

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

        const content = <DialogBody>
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
        </DialogBody>;

        return <Dialog open={open} {...others}>
            <DialogHead onClose={this.handleClose}>修改密码</DialogHead>
            {content}
            <DialogActions>
                <Button color={'primary'}>确定</Button>
                <Button onClick={this.handleClose}>取消</Button>
            </DialogActions>
        </Dialog>;
    }

}

export default ChangePwdWin;