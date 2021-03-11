import './index.less';
import React from 'react';
import { ChTablePanel, FormItemType } from 'ch-ui';
export default () => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '品牌',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  return (
    <div>
      <ChTablePanel
        urlDelete="/api/grade/delete"
        urlAdd="/api/grade/add"
        urlUpdate="/api/grade/edit"
        url="/api/grade/page"
        columns={columns}
        formData={[
          {
            type: FormItemType.input,
            label: '名称',
            name: 'name',
            rules: [{ required: true, message: '请输入商品名称' }],
          },
          {
            type: FormItemType.select,
            label: '品牌',
            name: 'name',
            options: [],
            rules: [{ required: true, message: '请输入商品品牌' }],
          },
          {
            type: FormItemType.input,
            label: '价格',
            name: 'price',
            rules: [{ required: true, message: '请输入商品价格' }],
          },
        ]}
      ></ChTablePanel>
    </div>
  );
}
