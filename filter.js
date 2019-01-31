//Defina aqui os sites que você considera procrastinar
const SitesDeProcrastinacao = [
'www.facebook.com','www.youtube.com','www.linkedin.com'
];
//Defina aqui sua frase motivacional
const fraseMotivacional = 'Você não pode acessar essa página, você nunca alcançará a maestria assim.. bora ser produtivo :D'

//Url atual
const UrlAtual = window.location.href
//verifica array de sites proibidos :V
SitesDeProcrastinacao.forEach(function (sites) {
  if(UrlAtual.includes(sites)){
    alert(fraseMotivacional)
    history.back()
  }
});
