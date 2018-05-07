import React from 'react';
import { With } from '../../components/Components';

const styles = theme => ({
    root: {
        width: 1000,
        margin: '0 auto'
    },
    listDecimal: {
        listStyle: 'decimal'
    }
})

class Description extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <h2>简介</h2>
            <h3>使用方法</h3>
            <div>
                <ul className={classes.listDecimal}>
                    <li>安装NodeJs。</li>
                    <li>在项目根目录执行<code>npm install</code>安装所需包。</li>
                    <li>在项目根目录执行<code>npm start</code>启动项目。</li>
                    <li>在浏览器访问<code>http://localhost:3000</code>即可。</li>
                </ul>
            </div>
        </div>;
    }
}

export default With(Description, { styles: styles });