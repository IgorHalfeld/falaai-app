const DefaultLayout = () => import('layouts/Default.vue');
const GrettingPage = () => import('pages/Gretting');
const TakePage = () => import('pages/TakePicture');

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Gretting', component: GrettingPage },
      { path: '/enviar-foto', name: 'Take', component: TakePage },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: GrettingPage });
}

export default routes;
