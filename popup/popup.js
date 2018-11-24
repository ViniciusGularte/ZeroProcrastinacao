function getInputs(){
  let array =[];
  const sites = document.querySelectorAll('.popup-content__input');
  for (i = 0; i < sites.length; ++i) {
    array = [sites[i].value];
  }
}
function addInputs(){
  const template = `<input class="popup-content__input" placeholder="Site"/>`;
  document.querySelector('#popup-content').insertAdjacentHTML('beforeend',template);
}
document.querySelector('#addInputs').onclick = addInputs;
export { getInputs };
