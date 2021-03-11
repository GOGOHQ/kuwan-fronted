import { defineConfig } from 'umi';

export default defineConfig({
  title: '酷玩后台',
  nodeModulesTransform: {
    type: 'none',
  },
  styles: ['https://at.alicdn.com/t/font_2306248_2jnlso6p4uu.css'],
  fastRefresh: {},
  theme: {
    '@primary-color': '#ff6a00',
  },
  dynamicImport: {},
});
