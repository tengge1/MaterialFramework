import React from 'react';
import { withStyles, GridPanel, TopBar, BottomBar, Columns, Column, Button, Add, Edit, Search, Delete } from '../../../components/Components';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class UserList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <GridPanel className={classes.root}>
                <TopBar>
                    <Button>
                        <Add />
                        添加
                    </Button>
                    <Button>
                        <Edit />
                        编辑
                    </Button>
                    <Button>
                        <Search />
                        查询
                    </Button>
                    <Button>
                        <Delete />
                        删除
                    </Button>
                </TopBar>
                <Columns>
                    <Column checkbox={true}></Column>
                    <Column>用户名</Column>
                    <Column>姓名</Column>
                    <Column>性别</Column>
                    <Column>手机号</Column>
                    <Column>手机串号</Column>
                </Columns>
                <BottomBar>

                </BottomBar>
            </GridPanel>
        );
    }
}

export default withStyles(styles)(UserList);