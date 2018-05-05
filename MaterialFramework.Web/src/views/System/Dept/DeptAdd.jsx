import React from 'react';
import { Controller, Window, Header, Content, Action, FormControl, FormLabel, Input, Button, Msg } from '../../../components/Components';
import DeptAddController from './DeptAddController';

const styles = theme => ({
    root: {

    }
});

class DeptAdd extends React.Component {
    render() {
        const { open, onClose, ...others } = this.props;

        return <React.Fragment>
            <Window open={open} {...others} onClose={onClose.bind(this)}>
                <Header>添加机构</Header>
                <Content>
                    <FormControl>
                        <FormLabel>上级机构</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>机构名称</FormLabel>
                        <Input />
                    </FormControl>
                </Content>
                <Action>
                    <Button color={'primary'} onClick={this.handleOK.bind(this)}>确定</Button>
                    <Button onClick={onClose.bind(this)}>取消</Button>
                </Action>
            </Window>
            <Msg open={this.state.successMsgOpen} onClose={this.handleSuccessMsgClose.bind(this)}>添加成功</Msg>
        </React.Fragment>;
    }
}

export default Controller(DeptAdd, { styles: styles, controller: DeptAddController });