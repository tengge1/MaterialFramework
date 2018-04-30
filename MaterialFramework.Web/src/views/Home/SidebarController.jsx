import PerfectScrollbar from 'perfect-scrollbar';

class SidebarController {
    state = {
        open: true,
        expand: []
    };

    expand() { // 展开侧边栏
        this.setState({ open: true });
    };

    collapse() { // 关闭侧边栏
        this.setState({ open: false, expand: [] });
    };

    toggle() { // 展开或关闭侧边栏
        if (this.state.open === true) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    expandItem(id) { // 展开菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) === -1) {
            expand.push(id);
        }
        this.setState({ expand: expand });
    }

    collapseItem(id) { // 关闭菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) !== -1) {
            var index = expand.indexOf(id);
            expand.splice(index, 1);
        }
        this.setState({ expand: expand });
    }

    toggleItem(id) { // 展开或关闭菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) === -1) {
            this.expandItem(id);
        } else {
            this.collapseItem(id);
        }
    };

    handleClick(id, name, path, leaf) { // 点击菜单子项
        if (leaf) {
            if (this.props && this.props.onItemClick) {
                this
                    .props
                    .onItemClick
                    .call(this, id, name, path);
            }
        } else {
            this.toggleItem(id);
        }
    }

    componentDidMount() {
        this.scrollbar = new PerfectScrollbar(this.refs.root);
        this.scrollbar.update();
    }

    componentWillUnmount() {
        if (this.scrollbar) {
            delete this.scrollbar;
        }
    }

    componentDidUpdate() {
        this.scrollbar.update();
    }
}

export default SidebarController;