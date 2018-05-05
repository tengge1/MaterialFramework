import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import AppBar from '../toolbar/AppBar';
import Toolbar from '../toolbar/Toolbar';
import Text from '../text/Text';
import { Close } from '../icon/Icons';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        cursor: 'move'
    },
    text: {
        flex: 1,
        color: '#fff',
        userSelect: 'none'
    },
    close: {
        cursor: 'pointer'
    }
});

class DialogHead extends React.Component {

    state = {
        time: new Date().getTime()
    };

    mouseDown = false;
    lastMouseX = 0;
    lastMouseY = 0;
    clientX = 0;
    clientY = 0;

    handleClose = () => {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    };

    update = () => {
        this.setState({
            time: new Date().getTime()
        });
    };

    handleMouseDown = (event) => {
        this.mouseDown = true;
        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
    };

    handleMouseMove = (event) => {
        if (!this.mouseDown) {
            return;
        }

        const dx = event.clientX - this.lastMouseX;
        const dy = event.clientY - this.lastMouseY;

        this.clientX += dx;
        this.clientY += dy;

        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;

        var dom = ReactDom.findDOMNode(this);
        dom.parentNode.style.left = `${this.clientX}px`;
        dom.parentNode.style.top = `${this.clientY}px`;
    };

    handleMouseUp = () => {
        this.mouseDown = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
    };

    componentDidMount = () => {

    };

    componentWillUnmount = () => {

    };

    render() {
        const { children, className, classes } = this.props;

        return <AppBar
            className={classNames(classes.root, className)}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}>
            <Toolbar>
                <Text variant={'subheading'} className={classes.text}>{children}</Text>
                <Close className={classes.close} onClick={this.handleClose} />
            </Toolbar>
        </AppBar>
    }

}

export default withStyles(styles)(DialogHead);