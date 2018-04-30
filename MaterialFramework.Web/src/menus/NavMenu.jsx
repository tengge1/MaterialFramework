import DocumentMenu from './DocumentMenu';
import SystemMenu from './SystemMenu';

const NavMenu = [{
    id: 1,
    name: '开发文档',
    path: 'document',
    children: DocumentMenu
}, {
    id: 2,
    name: '系统管理',
    path: 'system',
    children: SystemMenu
}];

export default NavMenu;