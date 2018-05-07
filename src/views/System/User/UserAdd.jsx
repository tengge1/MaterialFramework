import React from 'react';
import {
    Dialog, DialogActions, DialogContent, Button, With,
    AppBar, Toolbar, FormControl, FormLabel, Input
} from '../../../components/Components';
import { Close } from '../../../components/Icons';
import UserAddController from './UserAddController';

const styles = theme => ({
    root: {
        // width: 800,
        // height: 500
    }
});

class UserAdd extends React.Component {
    render() {
        const { open, classes } = this.props;

        return <Dialog open={open} className={classes.root}>
            <AppBar>
                <Toolbar>添加用户<Close /></Toolbar>
            </AppBar>
            <DialogContent>
                <FormControl>
                    <FormLabel>用户名</FormLabel>
                    <Input />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button color={'primary'}>确定</Button>
                <Button>取消</Button>
            </DialogActions>
        </Dialog>;
    }
}

export default With(UserAdd, { styles: styles, controller: UserAddController });