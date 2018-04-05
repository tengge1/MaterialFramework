import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from '../withRoot';
import Header from './Home/Header.jsx';
import NavMenu from './Home/NavMenu.jsx';
import Content from './Home/Content';

const styles = () => ({
    root: {
        width: '100%',
        height: '100%'
    },
    header: {
        height: '40px'
    },
    navMenu: {
        marginTop: '28px'
    },
    content: {}
});

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header className={classes.header}/>
                <div>
                    <NavMenu className={classes.navMenu}/>
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