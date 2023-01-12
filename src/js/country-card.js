export const countryCardItem = cardInfo => {
  return `
    <li class="country-list_item">
      <img src="${cardInfo.flags.svg}" alt="${cardInfo.name.official}" width="40" class="contry-list_flag>
        <h2 class="country-list_name">${cardInfo.name.official}</h2>
      </img>
    </li>
  `;
};

export const countryCardList = listInfo => {
  return `
      <div class="country-info__wrapper">
        <img class="country-info__flag" src="${listInfo.flags.svg}" alt="${
    listInfo.name.official
  }" width="40" />
        <h2 class="country-info__name">${listInfo.name.official}</h2>
      </div>
      <p class="country-info__capital"><span class="country-info__bold">Capital:</span> ${
        listInfo.capital
      }</p>
      <p class="country-info__population"><span class="country-info__bold">Population:</span> ${
        listInfo.population
      }</p>
      <p class="country-info__language"><span class="country-info__bold">Languages:</span> ${Object.values(
        listInfo.languages
      )}</p>
  `;
};
