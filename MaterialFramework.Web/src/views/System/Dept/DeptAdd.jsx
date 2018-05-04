import React from 'react';
import { Controller, Window, Header, Content, Action, FormControl, FormLabel, Input, Button } from '../../../components/Components';
import DeptAddController from './DeptAddController';

const styles = theme => ({
    root: {

    }
});

class DeptAdd extends React.Component {
    state = {
        open: true
    };

    handleOK() {

    }

    handleClose() {

    }

    render() {
        return <Window open={this.state.open} onClose={this.handleClose.bind(this)}>
            <Header>添加机构</Header>
            <Content>
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
            </Content>
            <Action>
                <Button color={'primary'} onClick={this.handleOK.bind(this)}>确定</Button>
                <Button onClick={this.handleClose.bind(this)}>取消</Button>
            </Action>
        </Window>;
    }
}

export default Controller(DeptAdd, { styles: styles, controller: DeptAddController });