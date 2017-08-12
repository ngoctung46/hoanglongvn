import { MenuItem } from './menu-item.model';
export const MENU: MenuItem[] = [
    new MenuItem('Trang Chính',''),
    new MenuItem(
        'Quản Lý',
        '/manage',
        [
            new MenuItem('Phòng', '/room'),
            new MenuItem('Dịch Vụ','/room')
        ]),
    new MenuItem(
        'Báo Cáo',
        '/report',
        [
            new MenuItem('Báo Cáo Ngày','daily-report'),
            new MenuItem('Báo Cáo Tháng', 'monthly-report'),
            new MenuItem('Báo Cáo Năm', 'periodical-report')
        ])
];
