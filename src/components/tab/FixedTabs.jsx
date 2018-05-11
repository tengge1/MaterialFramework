import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import withStyles from '../style/withStyles.jsx';
import AppBar from '../toolbar/AppBar.jsx';
import Tabs from './Tabs.jsx';
import Tab from './Tab.jsx';
import Text from '../text/Text.jsx';

function TabContainer({ children, dir }) {
    return (
        <Text component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Text>
    );
}

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500
    },
});

class FixedTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(FixedTabs);
