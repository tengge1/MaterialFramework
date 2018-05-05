
class ContentController {
    handleChange(event, value) {
        if (this.props && this.props.onTabIndexChange) {
            this
                .props
                .onTabIndexChange
                .call(this, value, event);
        }
    }

    closeTab(event, tab, index) {
        event.stopPropagation();
        if (this.props && this.props.onTabClose) {
            this.props.onTabClose(tab, index);
        }
    }
}

export default ContentController;