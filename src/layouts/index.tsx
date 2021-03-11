import { IRouteComponentProps } from 'umi';
import React, { useEffect, useState } from 'react';
import { ChLayout, } from 'ch-ui';
import './index.less';
import { Button } from 'antd';
export default function Layout({
    children,
    location,
    route,
    history,
    match,
}: IRouteComponentProps) {
    const [currentPathIndex, setCurrentPathIndex] = useState(1);
    const siderItemData = [
        {
            icon: <span className="paper_iconfont paper_iconnianjiguanli" />,
            path: '/product',
            text: '商品管理',
            click: () => {
                history.push('/product');
            },
        },
        {
            icon: <span className="paper_iconfont paper_iconshijuan" />,
            path: '/brand',
            text: '品牌管理',
            click: () => {
                history.push('/brand');
            },
        },
        {
            icon: <span className="paper_iconfont paper_iconpingtai_kemu" />,
            path: '/tag',
            text: '标签管理',
            click: () => {
                history.push('/tag');
            },
        },
    ];
    return <ChLayout
        adminIcon={
            <div className="flex-center">
                <span className="paper_iconfont paper_iconxueyuan-fufeikecheng2"></span>
            </div>
        }
        header={<div className='layout-header'><div className='relogin'>
            <Button onClick={() => {
                localStorage.clear();
                window.location.reload()
            }}>注销</Button>
        </div></div>}
        sider={{
            siderItems: siderItemData,
            currentItem: currentPathIndex,
        }}
    >
        <div className="layout-content">{children}</div>
    </ChLayout>
}