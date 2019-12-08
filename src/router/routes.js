const DefaultLayout = () => import('layouts/Default.vue');
const GrettingPage = () => import('pages/Gretting');
const TakePage = () => import('pages/TakePicture');
const IssueSelectPage = () => import('pages/IssueSelect');
const SendPage = () => import('pages/Send');

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Gretting', component: GrettingPage },
      { path: '/enviar-foto', name: 'Take', component: TakePage },
      { path: '/selecionar-problema', name: 'Issue', component: IssueSelectPage },
      { path: '/confirmar-e-enviar', name: 'Send', component: SendPage },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: GrettingPage });
}

export default routes;
