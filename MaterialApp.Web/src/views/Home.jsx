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
    state = {
        tabs: [
            {
                id: 0,
                name: '主页',
                path: '/'
            }
        ],
        currentTab: 0
    };

    onMenuItemClick = (id, name, path) => {
        const tabs = this.state.tabs;
        const index = tabs.findIndex((item) => {
            return item.path === path;
        });
        if (index === -1) {
            tabs.push({id: id, name: name, path: path});
            this.setState({
                tabs: tabs,
                currentTab: tabs.length - 1
            });
        } else {
            this.setState({currentTab: index});
        }
    }

    onTabIndexChange = (index) => {
        this.setState({currentTab: index});
    }

    render() {
        const {classes} = this.props;
        const {tabs, currentTab} = this.state;
        return (
            <div className={classes.root}>
                <Header/>
                <div className={classes.box}>
                    <Sidebar onItemClick={this.onMenuItemClick}/>
                    <Content
                        className={classes.content}
                        tabs={tabs}
                        currentTab={currentTab}
                        onTabIndexChange={this.onTabIndexChange}/>
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Home));