//pobranie do zmiennej wszystkich checkboxów z klasą stan_boxa
const checkboxes = document.querySelectorAll('.stan_boxa');

//Zaznaczenie na stronie stanu jaki został zrobiony
checkboxes.forEach(cb => {
  const saved = localStorage.getItem(cb.id);
  if(saved !== null){
    cb.checked = saved === 'true';
  }
  //zapisanie stanu przy każdej zmianie
  cb.addEventListener('change', () => {
    localStorage.setItem(cb.id, cb.checked);
  });
});
