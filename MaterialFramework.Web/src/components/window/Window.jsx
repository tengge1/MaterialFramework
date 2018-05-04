import React from 'react';
import Dialog from '../dialog/Dialog';
import DialogHead from '../dialog/DialogHead';
import DialogBody from '../dialog/DialogBody';
import DialogActions from '../dialog/DialogActions';
import Header from '../placeholder/Header';
import Content from '../placeholder/Content';
import Action from '../placeholder/Action';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {

    }
});

class Window extends React.Component {
    handleClose() {
        const { onClose } = this.props;
        if (typeof (onClose) === 'function') {
            onClose();
        }
    }

    parseHeader() {
        const { children } = this.props;
        if (children == null) {
            return;
        }

        const header = children.filter((n) => {
            return n.type.name === Header.name;
        })[0];
        if (header == null) {
            return null;
        }
        return <DialogHead onClose={this.handleClose.bind(this)}>{header.props.children}</DialogHead>
    }

    parseContent() {
        const { children } = this.props;
        if (children == null) {
            return;
        }

        const content = children.filter((n) => {
            return n.type.name === Content.name;
        })[0];
        if (content == null) {
            return null;
        }
        return <DialogBody>{content.props.children}</DialogBody>
    }

    parseAction() {
        const { children } = this.props;
        if (children == null) {
            return;
        }

        const action = children.filter((n) => {
            return n.type.name === Action.name;
        })[0];
        if (action == null) {
            return null;
        }
        return <DialogActions>{action.props.children}</DialogActions>
    }

    render() {
        const { open, ...others } = this.props;
        const header = this.parseHeader();
        const content = this.parseContent();
        const action = this.parseAction();

        return <Dialog open={open} {...others}>
            {header}
            {content}
            {action}
        </Dialog>;
    }
}

export default withStyles(styles)(Window);