import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { countryCardItem, countryCardList } from './js/country-card';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
let div = document.querySelector('.country-info');
let ul = document.querySelector('.country-list');

input.addEventListener('input', debounce(onEventInput, DEBOUNCE_DELAY));

function onEventInput(e) {
  e.preventDefault();
  let country = input.value.trim();

  console.log(country);

  if (country === '') {
    div.innerHTML = '';
    ul.innerHTML = '';
    return;
  }
  fetchCountries(country)
    .then(data => {
      console.log(data);

      if (data.length > 10) {
        Notify.success(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (data.length <= 10) {
        console.log(data);
        const listMarkup = data.map(el => {
          return countryCardItem(el);
        });
        console.log(listMarkup);
        div.innerHTML = listMarkup.join('');
        ul.innerHTML = '';
      }

      if (data.length === 1) {
        console.log(data);
        data.map(el => {
          console.log(el);
          div.innerHTML = countryCardList(el);
          ul.innerHTML = '';
        });
      }
    })
    .catch(error => {
      Notify.success('Oops, there is no country with that name');
      div.innerHTML = '';
      ul.innerHTML = '';
      return error;
    });
}
