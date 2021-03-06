import React from 'react';
import { AppBar, Tabs, Tab, With } from '../../components/Components';
import { Close } from '../../components/Icons';
import Views from '../Views';
import ContentController from './ContentController';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0
    },
    appBar: {
        boxShadow: 'none'
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
    },
    content: {
        height: 'calc(100% - 48px)',
        padding: 2
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
    render() {
        const { classes, tabs, currentTab } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Tabs
                        value={currentTab}
                        onChange={this.handleChange.bind(this)}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto">
                        {tabs.map((tab, index) => {
                            const label = <React.Fragment>
                                {tab.name}
                                {tab.closable && (<Close
                                    className={classes.close}
                                    onClick={(event) => this.closeTab.call(this, event, tab, index)} />)}
                            </React.Fragment>

                            return <Tab
                                label={label}
                                key={tab.id}
                                className={classes.tab} />;
                        })}
                    </Tabs>
                </AppBar>
                <div className={classes.content}>
                    <TabContainer path={tabs[currentTab].path}></TabContainer>
                </div>
            </div>
        );
    }
}

export default With(Content, { styles: styles, controller: ContentController });