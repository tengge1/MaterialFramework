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
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto">
                        <Tab label="Item One"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                        <Tab label="Item Four"/>
                        <Tab label="Item Five"/>
                        <Tab label="Item Six"/>
                        <Tab label="Item Seven"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    {/* <Route exact path={"/"} component={DashboardPage}></Route>
                    <Route exact path={"/user"} component={UserProfile}></Route> */}
                </TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
                {value === 4 && <TabContainer>Item Five</TabContainer>}
                {value === 5 && <TabContainer>Item Six</TabContainer>}
                {value === 6 && <TabContainer>Item Seven</TabContainer>}
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Content));