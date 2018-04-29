import React from 'react';
import { AppBar, Tabs, Tab, Controller } from '../../components/Components';
import { Close } from '../../components/Icons';
import Views from '../Views';

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

export default Controller(Content, { styles: styles });