import React from 'react';
import { withStyles, Button, Card, CardActions, Add, Edit, Search, Delete } from '../../../components/Components';
import GridPanel from '../../../components/table/GridPanel';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class UserList extends React.Component {
    render() {
        const { classes } = this.props;
        const buttons = <CardActions>
            <Button variant="raised" color="primary" className={classes.button}>
                <Add />
                添加
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
                <Edit />
                编辑
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
                <Search />
                查询
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
                <Delete />
                删除
            </Button>
        </CardActions>;

        return (
            <Card>
                {buttons}
                <GridPanel className={classes.root} />
            </Card>
        );
    }
}

export default withStyles(styles)(UserList);