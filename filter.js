//Defina aqui os sites que você considera procrastinar
const SitesDeProcrastinacao = [
'www.facebook.com','www.youtube.com','www.linkedin.com'
];
//Defina aqui sua frase motivacional
const fraseMotivacional = 'Você não pode acessar essa página, você nunca alcançará a maestria assim.. bora ser produtivo :D'

var parsedUrl = new URL(window.location.href)
//Url atual
const UrlAtual = parsedUrl.href
//verifica array de sites proibidos :V
SitesDeProcrastinacao.forEach(function (sites) {
  if(UrlAtual.includes(sites)){
    alert(fraseMotivacional)
    history.back()
  }
});
