import DemoMenu from './DemoMenu';
import SystemMenu from './SystemMenu';

const NavMenu = [{
    id: 1,
    name: '控件演示',
    path: 'demo',
    children: DemoMenu
}, {
    id: 2,
    name: '系统管理',
    path: 'system',
    children: SystemMenu
}];

export default NavMenu;