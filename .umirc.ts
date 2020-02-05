import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/user/',
          component: './user/index',
        },
        {
          path: '/',
          component: './Home/index',
        }
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'h5',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  proxy: {
    '/initajax': {
      target: 'http://m.ph1yyg.cn/?/mobile/mobile/initajax',
      pathRewrite: { '^/initajax': '' },
      changeOrigin: true
    }
  },
};
export default config;
