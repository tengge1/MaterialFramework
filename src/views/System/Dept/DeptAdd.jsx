import React from 'react';
import { With, Window, Header, Content, Action, FormControl, FormLabel, Input, Button, Msg, Select, MenuItem } from '../../../components/Components';
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
                        <Select value={1}>
                            <MenuItem value={1}>中国石油集团</MenuItem>
                            <MenuItem value={2}>大庆油田分公司</MenuItem>
                            <MenuItem value={3}>胜利油田分公司</MenuItem>
                            <MenuItem value={4}>江苏油田分公司</MenuItem>
                        </Select>
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

export default With(DeptAdd, { styles: styles, controller: DeptAddController });