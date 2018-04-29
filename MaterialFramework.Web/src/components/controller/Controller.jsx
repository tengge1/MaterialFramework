import React from 'react';
import withStyles from '../style/withStyles';
import withTheme from '../style/withTheme';

/**
 * 用于给控件添加选项（例如：样式、主题、控制器）
 * @param {*} Component 控件类
 * @param {*} options styles-样式，theme-主题，controller-控制器
 */
function Controller(Component, options) {
    const { styles, theme, controller } = options;

    const StyleComponent = styles ? withStyles(styles, { withTheme: theme === true ? true : false })(Component) :
        (theme === true ? withTheme(Component) : Component);

    return class extends React.Component {

        render() {
            const { children, ...others } = this.props;

            if (controller) {
                return <StyleComponent {...others} {...controller}>{children}</StyleComponent>;
            } else {
                return <StyleComponent {...others}>{children}</StyleComponent>;
            }
        }

    };
}

export default Controller;