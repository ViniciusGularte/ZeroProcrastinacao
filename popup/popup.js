console.log("função acessada");

function getInputs(){
  let sites = document.querySelector('.popup-content__input').value;
  return sites;
}
function addInputs(){
  const template = `<input class="popup-content__input" placeholder="Site"/>`;
  document.querySelector('#popup-content').insertAdjacentHTML('beforeend',template);
}
console.log(getInputs());
document.querySelector('#addInputs').onclick = addInputs;
export { getInputs };
