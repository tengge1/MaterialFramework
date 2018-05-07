import React from 'react';
import {
    Dialog, DialogActions, DialogHead, DialogBody, Button, FormControl, FormLabel, Input, With, Msg
} from '../../components/Components';
import ChangePwdWinController from './ChangePwdWinController';

class ChangePwdWin extends React.Component {
    render() {
        const { open, ...others } = this.props;

        return <React.Fragment>
            <Dialog open={open} {...others}>
                <DialogHead onClose={this.handleClose.bind(this)}>修改密码</DialogHead>
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
                    <Button color={'primary'} onClick={this.handleOK.bind(this)}>确定</Button>
                    <Button onClick={this.handleClose.bind(this)}>取消</Button>
                </DialogActions>
            </Dialog>
            <Msg open={this.state.msgOpen} onClose={this.handleMsgClose.bind(this)}>密码修改成功！</Msg>
        </React.Fragment>;
    }
}

export default With(ChangePwdWin, { controller: ChangePwdWinController });