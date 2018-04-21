import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab } from 'material-ui';
import { Close } from 'material-ui-icons';
import Views from '../Views.jsx';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0
    },
    hidden: {
        display: 'none'
    },
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    close: {
        alignItems: 'center',
        fontSize: '12px',
        marginLeft: '3px'
    }
});

function TabContainer(props) {
    const path = props.path,
        component = Views.filter((item) => {
            return item.path === path;
        })[0];
    if (component == null || component.component == null) {
        return null;
    }
    return React.createElement(component.component);
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
        const { classes, tabs, currentTab } = this.props;
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
                            return <Tab
                                label={this.createTabLabel(tab, index)}
                                key={tab.id}
                                className={classes.tab} />;
                        })}
                    </Tabs>
                </AppBar>
                <TabContainer path={tabs[currentTab].path}></TabContainer>
            </div>
        );
    }

    createTabLabel = (tab, index) => {
        const { classes } = this.props;
        return (
            <React.Fragment>
                {tab.name}
                {tab.closable && (<Close
                    className={classes.close}
                    onClick={(event) => {
                        event.stopPropagation();
                        this.closeTab(tab, index)
                    }} />)}
            </React.Fragment>
        );
    }

    closeTab = (tab, index) => {
        if (this.props && this.props.onTabClose) {
            this
                .props
                .onTabClose(tab, index);
        }
    }
}

Content.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.array,
    currentTab: PropTypes.number,
    onTabIndexChange: PropTypes.func,
    onTabClose: PropTypes.func
};

export default withStyles(styles)(Content);