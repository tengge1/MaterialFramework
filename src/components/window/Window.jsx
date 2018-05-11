import React from 'react';
import Dialog from '../dialog/Dialog.jsx';
import DialogHead from '../dialog/DialogHead.jsx';
import DialogBody from '../dialog/DialogBody.jsx';
import DialogActions from '../dialog/DialogActions.jsx';
import Header from '../placeholder/Header.jsx';
import Content from '../placeholder/Content.jsx';
import Action from '../placeholder/Action.jsx';
import withStyles from '../style/withStyles.jsx';

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
            return null;
        }

        const header = children.filter((n) => {
            return n.type === Header;
        })[0];
        if (header == null) {
            return null;
        }
        return <DialogHead onClose={this.handleClose.bind(this)}>{header.props.children}</DialogHead>
    }

    parseContent() {
        const { children } = this.props;
        if (children == null) {
            return null;
        }

        const content = children.filter((n) => {
            return n.type === Content;
        })[0];
        if (content == null) {
            return null;
        }
        return <DialogBody>{content.props.children}</DialogBody>
    }

    parseAction() {
        const { children } = this.props;
        if (children == null) {
            return null;
        }

        const action = children.filter((n) => {
            return n.type === Action;
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