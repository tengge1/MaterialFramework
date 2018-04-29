import React from 'react';
import { Controller } from '../components/Components';
import Header from './Home/Header';
import Sidebar from './Home/Sidebar';
import Content from './Home/Content';
import HomeController from './HomeController';

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

export default Controller(Home, { styles: styles, controller: HomeController });