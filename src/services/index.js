import axios from 'axios';
import GeneralService from './general';

const generalHttpClient = axios.create({
  baseURL: 'http://aplicacoes.portodesantos.com.br:9104/siap/servicos/atracacao/siteweb/',
  headers: {
    Host: 'aplicacoes.portodesantos.com.br:9104',
    Origin: 'http://www.portodesantos.com.br',
    Referer: 'http://www.portodesantos.com.br/en/',
  },
});

export default {
  general: GeneralService(generalHttpClient),
};
