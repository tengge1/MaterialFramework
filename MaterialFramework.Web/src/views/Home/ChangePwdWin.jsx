import React from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button, AppBar, Toolbar } from '../../components/Components';

class ChangePwdWin extends React.Component {

    render() {
        const { open, ...others } = this.props;

        const content = <DialogContent>
            <TextField label={'原密码'} fullWidth={true} />
            <TextField label={'新密码'} fullWidth={true} />
            <TextField label={'确认密码'} fullWidth={true} />
        </DialogContent>;

        return <Dialog open={open} {...others}>
            <AppBar>
                <Toolbar>修改密码</Toolbar>
            </AppBar>
            {content}
            <DialogActions>
                <Button color={'primary'}>确定</Button>
                <Button>取消</Button>
            </DialogActions>
        </Dialog>;
    }

}

export default ChangePwdWin;