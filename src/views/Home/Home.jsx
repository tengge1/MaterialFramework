import React from 'react';
import { Grid, Card, CardHeader, CardContent, List, ListItem, ListItemText, FixedTabs, Controller, AppBar, Toolbar } from '../../components/Components';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import HomeController from './HomeController';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 16
    }
});

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root} ref={this.rootRef}><Grid container spacing={16}>
            <Grid item xs={4}>
                <Card>
                    <AppBar color={'default'}>
                        <Toolbar>通知公告</Toolbar>
                    </AppBar>
                    <List>
                        <ListItem>
                            <ListItemText>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            中国石油直属团委表彰第三届“十佳青年岗位能手”
                        </ListItem>
                        <ListItem>
                            中国石油荣获中央企业青年创新奖
                        </ListItem>
                        <ListItem>
                            川庆钻井液登上中欧专列
                        </ListItem>
                        <ListItem>
                            集团公司卫星通信系统转星工作完成
                        </ListItem>
                    </List>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader>集团新闻</CardHeader>
                    <CardContent>
                        <List>
                            <ListItem>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItem>
                            <ListItem>
                                中国石油直属团委表彰第三届“十佳青年岗位能手”
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader>集团新闻</CardHeader>
                    <CardContent>
                        <List>
                            <ListItem>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItem>
                            <ListItem>
                                中国石油直属团委表彰第三届“十佳青年岗位能手”
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader>集团新闻</CardHeader>
                    <CardContent>
                        <List>
                            <ListItem>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItem>
                            <ListItem>
                                中国石油直属团委表彰第三届“十佳青年岗位能手”
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader>集团新闻</CardHeader>
                    <CardContent>
                        <List>
                            <ListItem>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItem>
                            <ListItem>
                                中国石油直属团委表彰第三届“十佳青年岗位能手”
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>;
    }
}

export default Controller(Home, { styles: styles, controller: HomeController });