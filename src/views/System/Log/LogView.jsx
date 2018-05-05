import React from 'react';
import {
    Dialog, DialogHead, DialogBody, DialogActions, Button, Controller,
    FormControl, FormLabel, Grid, Text
} from '../../../components/Components';
import LogViewController from './LogViewController';

const styles = theme => ({
    root: {
        // width: 800,
        // height: 500
    }
});

class LogView extends React.Component {
    render() {
        const { open, classes } = this.props;

        return <Dialog open={open} className={classes.root}>
            <DialogHead onClose={this.handleClose.bind(this)}>日志查看</DialogHead>
            <DialogBody>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>时间</FormLabel>
                            <Text>2018-03-02 13:45:06</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>标题</FormLabel>
                            <Text>用户test登录</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>类型</FormLabel>
                            <Text>用户事件</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>来源</FormLabel>
                            <Text>Web应用</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>等级</FormLabel>
                            <Text>消息</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>用户</FormLabel>
                            <Text>测试人员</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>IP</FormLabel>
                            <Text>192.168.1.3</Text>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>备注</FormLabel>
                            <Text></Text>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogBody>
            <DialogActions>
                <Button onClick={this.handleClose.bind(this)}>关闭</Button>
            </DialogActions>
        </Dialog>;
    }
}

export default Controller(LogView, { styles: styles, controller: LogViewController });