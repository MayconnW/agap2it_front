export function selectCountry(country) {
  return {
    type: "@map/SELECT_COUNTRY",
    payload: { country },
  };
}

export function setCountryCities(countryName, cities) {
  return {
    type: "@map/SET_COUNTRY_CITIES",
    payload: { countryName, cities },
  };
}
