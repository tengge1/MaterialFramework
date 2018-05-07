import React from 'react';
import {
    Grid, Card, List, ListItem, ListItemText, With, AppBar, Toolbar, IconButton, ECharts, Text, ListItemIcon, Avatar
} from '../../components/Components';
import { MoreVert, KeyboardArrowRight, Send, Drafts, Inbox } from '../../components/Icons';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import HomeController from './HomeController';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 8
    },
    headerAppBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerAppBarMoreIcon: {
        marginRight: 8
    },
    headerToolbar: {
        flex: 1
    },
    noticeIcon: {
        marginRight: 0
    },
    listItemText: {
        paddingLeft: 0
    },
    listItemTime: {
        color: 'rgba(0, 0, 0, 0.5)'
    }
});

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root} ref={this.rootRef}><Grid container spacing={8}>
            <Grid item xs={4}>
                <Card>
                    <AppBar color={'default'} className={classes.headerAppBar}>
                        <Toolbar className={classes.headerToolbar}>通知公告</Toolbar>
                        <IconButton className={classes.headerAppBarMoreIcon}><MoreVert /></IconButton>
                    </AppBar>
                    <List component={'nav'}>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                章建华赴湖南地区石油石化企业调研
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月7日</Text>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                王宜林与国家应急管理部党组书记黄明会谈
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月4日</Text>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                中国石油直属团委表彰第三届“十佳青年岗位能手”
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月4日</Text>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                中国石油荣获中央企业青年创新奖
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月4日</Text>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                川庆钻井液登上中欧专列
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月4日</Text>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.noticeIcon}>
                                <KeyboardArrowRight />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                集团公司卫星通信系统转星工作完成
                            </ListItemText>
                            <Text className={classes.listItemTime}>5月4日</Text>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <AppBar color={'default'} className={classes.headerAppBar}>
                        <Toolbar className={classes.headerToolbar}>油田产量</Toolbar>
                        <IconButton className={classes.headerAppBarMoreIcon}><MoreVert /></IconButton>
                    </AppBar>
                    <ECharts option={this.getProductionChange()} />
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <AppBar color={'default'} className={classes.headerAppBar}>
                        <Toolbar className={classes.headerToolbar}>常用功能</Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Send />
                            </ListItemIcon>
                            <ListItemText>未读消息</ListItemText>
                            <Avatar size={'small'}>10</Avatar>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Send />
                            </ListItemIcon>
                            <ListItemText>已读消息</ListItemText>
                            <Avatar size={'small'}>10</Avatar>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Send />
                            </ListItemIcon>
                            <ListItemText>草稿箱</ListItemText>
                            <Avatar size={'small'}>10</Avatar>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Drafts />
                            </ListItemIcon>
                            <ListItemText>待办事宜</ListItemText>
                            <Avatar size={'small'}>10</Avatar>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText>已办事宜</ListItemText>
                            <Avatar size={'small'}>10</Avatar>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
        </Grid>
        </div>;
    }
}

export default With(Home, { styles: styles, controller: HomeController });