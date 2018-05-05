import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    FormControl,
    Input,
    InputAdornment,
    IconButton,
    FormLabel,
    Controller
} from '../components/Components';
import { Visibility, VisibilityOff } from '../components/Icons';
import LoginController from './LoginController';
import cover from '../assets/img/cover.jpeg';

const loginBoxHeight = 280;

const styles = {
    root: {
        width: '100%',
        height: '100%',
        minWidth: 1366,
        minHeight: 750,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: `url(${cover}) no-repeat`,
        backgroundSize: 'cover',
        padding: 20
    },
    title: {
        fontSize: 36,
        color: 'white',
        textShadow: '3px 3px 3px rgba(0, 0, 0, 0.9)',
        letterSpacing: '0.1em'
    },
    card: {
        width: 420,
        height: loginBoxHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15
    },
    copyright: {
        color: 'white',
        textShadow: '3px 3px 3px rgba(0, 0, 0, 0.9)'
    },
    input: {
        flex: 1
    },
    pwdLabel: {
        letterSpacing: '1em'
    },
    action: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: '0 20px'
    }
};

class Login extends React.Component {
    render() {
        const { classes } = this.props;

        var passwordAdornment = <InputAdornment position="end">
            <IconButton
                onClick={this.handleShowPassword.bind(this)}
                onMouseDown={this.handleMouseDownPassword.bind(this)}>
                {this.state.showPassword
                    ? <VisibilityOff />
                    : <Visibility />}
            </IconButton>
        </InputAdornment>;

        return (
            <div className={classes.root}>
                <div className={classes.title}>中国石油天然气集团大数据分析与综合业务管理平台</div>
                <Card className={classes.card} raised={true} square={false}>
                    <CardContent>
                        <FormControl>
                            <FormLabel>用户名</FormLabel>
                            <Input
                                type={'text'}
                                name={'username'}
                                value={this.state.username}
                                placeholder={'请输入用户名'}
                                className={classes.input}
                                onChange={this.handleInputChange.bind(this)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel><span className={classes.pwdLabel}>密</span>码</FormLabel>
                            <Input
                                type={this.state.showPassword
                                    ? 'text'
                                    : 'password'}
                                name={'password'}
                                value={this.state.password}
                                placeholder={'请输入密码'}
                                className={classes.input}
                                endAdornment={passwordAdornment}
                                onChange={this.handleInputChange.bind(this)} />
                        </FormControl>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Button color="primary" className={classes.button} onClick={this.onLogin.bind(this)}>登录</Button>
                        <Button className={classes.button} onClick={this.onReset.bind(this)}>清空</Button>
                    </CardActions>
                </Card>
                <div className={classes.copyright}>Copyright© 1999-{new Date().getFullYear()} 中国石油天然气集团有限公司 版权所有</div>
            </div>
        );
    }
}

export default Controller(Login, { styles: styles, controller: LoginController });