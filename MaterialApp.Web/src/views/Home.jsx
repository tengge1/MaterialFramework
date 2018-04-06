import React from 'react';
import {withStyles} from 'material-ui';
import withRoot from '../withRoot';
import Header from './Home/Header.jsx';
import Sidebar from './Home/Sidebar.jsx';
import Content from './Home/Content';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
    box: {
        marginTop: 44,
        display: 'flex',
        flexGrow: 1,
        height: `calc(100% - 44px)`
    },
    content: {
        flex: 1
    }
});

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header/>
                <div className={classes.box}>
                    <Sidebar/>
                    <Content className={classes.content}/>
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Home));