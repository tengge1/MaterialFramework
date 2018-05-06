import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

class HomeController {
    rootRef = React.createRef();

    componentDidMount() {
        this.scrollbar = new PerfectScrollbar(this.rootRef.current);
        this.scrollbar.update();
    }

    componentWillUnmount() {
        if (this.scrollbar) {
            this.scrollbar.destroy();
            this.scrollbar = null;
        }
    }
}

export default HomeController;