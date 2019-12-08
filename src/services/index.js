import axios from 'axios';
import GeneralService from './general';
import AlertService from './alert';

const generalHttpClient = axios.create({
  baseURL: 'https://falaai-api.azurewebsites.net/',
  headers: {
    Host: 'aplicacoes.portodesantos.com.br:9104',
    Origin: 'http://www.portodesantos.com.br',
    Referer: 'http://www.portodesantos.com.br/en/',
  },
});

export default {
  general: GeneralService(generalHttpClient),
  alert: AlertService(generalHttpClient),
};
