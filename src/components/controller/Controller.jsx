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

    if (controller) {
        // 复制controller上的属性和箭头函数
        var instance = new controller();
        var instanceKeys = Object.keys(instance);
        instanceKeys.forEach(key => {
            Component.prototype[key] = instance[key];
        });

        // 复制controller上的方法
        var prototypeKeys = Object.getOwnPropertyNames(controller.prototype)
            .filter(o => { return o !== 'constructor'; });
        prototypeKeys.forEach(key => {
            Component.prototype[key] = controller.prototype[key];
        });
    }

    var StyleComponent = styles ? withStyles(styles, { withTheme: theme === true ? true : false })(Component) :
        (theme === true ? withTheme(Component) : Component);

    return class extends React.Component {

        render() {
            const { children, ...others } = this.props;
            return <StyleComponent {...others}>{children}</StyleComponent>;
        }

    };
}

export default Controller;