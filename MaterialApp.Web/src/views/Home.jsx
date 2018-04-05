import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
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
    sideBar: {
        height: '100%'
    },
    content: {
        flex: 1
    }
});

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header/>
                <div className={classes.box}>
                    <Sidebar className={classes.sideBar}/>
                    <Content className={classes.content}/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Home));