import { getInputs } from '/popup/popup.js';
//Defina aqui os sites que você considera procrastinar
const resposta = getInputs;
console.table(resposta);
const SitesDeProcrastinacao = [
'https://www.facebook.com/','https:/www.youtube.com/','https:/www.linkedin.com/'
];
var parsedUrl = new URL(window.location.href);
//Url atual
const UrlAtual = parsedUrl.href;
//verifica array de sites proibidos :V
SitesDeProcrastinacao.forEach(function (sites) {
  if(sites === UrlAtual){
    alert('Você não pode acessar essa página, você nunca alcançará a maestria assim.. bora ser produtivo :D');
    history.back();
  }
});
