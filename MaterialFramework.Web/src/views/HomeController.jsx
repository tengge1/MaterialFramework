class HomeController {
    state = {
        version: new Date().getTime()
    };

    tabs = [
        {
            id: 0,
            name: '主页',
            path: '/',
            closable: false
        }
    ];

    currentTab = 0;

    onMenuItemClick = (id, name, path) => {
        const index = this
            .tabs
            .findIndex((item) => {
                return item.path === path;
            });
        if (index === -1) {
            this
                .tabs
                .push({ id: id, name: name, path: path, closable: true });
            this.currentTab = this.tabs.length - 1;
            this.setState({
                version: new Date().getTime()
            });
        } else {
            this.currentTab = index;
            this.setState({
                version: new Date().getTime()
            });
        }
    }

    onTabIndexChange = (index) => {
        if (index < this.tabs.length) {
            this.currentTab = index;
            this.setState({
                version: new Date().getTime()
            });
        }
    }

    onTabClose = (tab, index) => {
        this
            .tabs
            .splice(index, 1);
        if (this.currentTab >= index) {
            this.currentTab--;
        }
        this.setState({
            version: new Date().getTime()
        });
    }

};

export default HomeController;