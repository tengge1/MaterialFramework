import React from 'react';
import {Route} from "react-router-dom";
import {
    withStyles,
    AppBar,
    Paper,
    Tabs,
    Tab,
    Typography
} from 'material-ui';
import classNames from 'classnames';
import withRoot from '../../withRoot';
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    hidden: {
        display: 'none'
    }
});

function TabContainer(props) {
    return (
        <Typography component="div" style={{
            padding: 8 * 3
        }}>
            {props.children}
        </Typography>
    );
}

class Content extends React.Component {
    state = {
        totalTabs: [
            {
                id: 0,
                title: '主页',
                path: '/'
            }
        ],
        current: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Route path="/" render={this.renderTab}></Route>
        );
    }

    renderTab = (route) => {
        const {classes} = this.props;
        const {totalTabs, current} = this.state;
        totalTabs.push({id: route.location.pathname, title: route.location.pathname, path: route.location.pathname});
        this.state.current++;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={current}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto">
                        {totalTabs.map((tab, index) => {
                            return <Tab label={tab.title}/>;
                        })}
                    </Tabs>
                </AppBar>
                {totalTabs.map((tab, index) => {
                    return <TabContainer
                        className={index === current
                        ? ''
                        : classes.hidden}>{tab.path}</TabContainer>;
                })}
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Content));