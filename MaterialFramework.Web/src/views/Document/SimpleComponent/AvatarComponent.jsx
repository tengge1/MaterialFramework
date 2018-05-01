import React from 'react';
import { Controller, Avatar, Code } from '../../../components/Components';
import Face from '../../../assets/img/faces/uxceo-128.jpg';

const styles = theme => ({
    root: {
        width: 1000,
        margin: '0 auto'
    },
    listDecimal: {
        listStyle: 'decimal'
    }
})

class AvatarComponent extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <h1>Avatars</h1>
            <div>在整个Material Design中都可以找到头像(Avatar)，从表格到对话框菜单的所有功能都可以使用。</div>
            <h2>使用方法</h2>
            <div>图片、图标、字母都可以用于Avatar控件。</div>
            <div>
                <Avatar src={Face} />
            </div>
            <div>
                <Code>
                    {`import Avatar from 'component/Components';\n\n`
                        + `<Avatar src={Face} />`}
                </Code>
            </div>
        </div>;
    }
}

export default Controller(AvatarComponent, { styles: styles });