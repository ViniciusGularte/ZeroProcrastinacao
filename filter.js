// Defina aqui os sites que você considera procrastinar
const SitesDeProcrastinacao = [
'www.facebook.com', 'www.youtube.com', 'www.linkedin.com'
];
// Defina aqui sua frase motivacional ou deixe a api puxar a frase do dia
const fraseMotivacionalPersonalizada = ''
fetch('https://quotes.rest/qod.json')
  .then(response => response.json())
  .then((data) => {
    const fraseMotivacional = data.contents.quotes[0].quote
    const fraseMotivacionalAutor = data.contents.quotes[0].author
    // Url atual
    const UrlAtual = window.location.href
    // verifica array de sites proibidos :V
    SitesDeProcrastinacao.forEach((sites) => {
      if (UrlAtual.includes(sites)) {
        if (fraseMotivacionalPersonalizada) {
          alert(fraseMotivacionalPersonalizada)
        } else {
          alert(`${fraseMotivacional} \n \n ${fraseMotivacionalAutor}`)
        }
        history.back()
      }
    });
})
.catch(error => console.error(error))
