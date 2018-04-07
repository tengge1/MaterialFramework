import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, AppBar, Tabs, Tab, Typography} from 'material-ui';
import withRoot from '../../withRoot';
// import DashboardPage from "views/Dashboard/Dashboard.jsx"; import UserProfile
// from "views/UserProfile/UserProfile.jsx";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0
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
    handleChange = (event, value) => {
        if (this.props && this.props.onTabIndexChange) {
            this
                .props
                .onTabIndexChange
                .call(this, value, event);
        }
    };

    render() {
        const {classes, tabs, currentTab} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={currentTab}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto">
                        {tabs.map((tab, index) => {
                            return <Tab label={tab.name} key={tab.id}/>;
                        })}
                    </Tabs>
                </AppBar>
                <TabContainer>{tabs[currentTab].path}</TabContainer>
            </div>
        );
    }
}

Content.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.array,
    currentTab: PropTypes.number,
    onTabIndexChange: PropTypes.func
};

export default withRoot(withStyles(styles)(Content));