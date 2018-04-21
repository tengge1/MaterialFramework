import React from 'react';
import { withStyles } from '../components/Components';
import Header from './Home/Header';
import Sidebar from './Home/Sidebar';
import Content from './Home/Content';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
    box: {
        marginTop: 48,
        display: 'flex',
        flexGrow: 1,
        height: `calc(100% - 48px)`
    },
    content: {
        flex: 1
    }
});

class Home extends React.Component {
    state = {
        version: new Date().getTime()
    };

    tabs = [
        {
            id: 0,
            name: '主页',
            path: '/',
            closable: false
        }
    ];

    currentTab = 0;

    onMenuItemClick = (id, name, path) => {
        const index = this
            .tabs
            .findIndex((item) => {
                return item.path === path;
            });
        if (index === -1) {
            this
                .tabs
                .push({ id: id, name: name, path: path, closable: true });
            this.currentTab = this.tabs.length - 1;
            this.setState({
                version: new Date().getTime()
            });
        } else {
            this.currentTab = index;
            this.setState({
                version: new Date().getTime()
            });
        }
    }

    onTabIndexChange = (index) => {
        if (index < this.tabs.length) {
            this.currentTab = index;
            this.setState({
                version: new Date().getTime()
            });
        }
    }

    onTabClose = (tab, index) => {
        this
            .tabs
            .splice(index, 1);
        if (this.currentTab >= index) {
            this.currentTab--;
        }
        this.setState({
            version: new Date().getTime()
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <div className={classes.box}>
                    <Sidebar onItemClick={this.onMenuItemClick} />
                    <Content
                        className={classes.content}
                        tabs={this.tabs}
                        currentTab={this.currentTab}
                        onTabIndexChange={this.onTabIndexChange}
                        onTabClose={(tab, index) => this.onTabClose.call(this, tab, index)} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);