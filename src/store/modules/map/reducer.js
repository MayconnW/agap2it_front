import produce from "immer";

const INITIAL_STATE = {
  selected: "",
  countryName: "",
  cities: [],
};

export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@map/SELECT_COUNTRY":
      return produce(state, draft => {
        draft.selected = action.payload.country;
        draft.countryName = "";
        draft.cities = [];
      });
    case "@map/SET_COUNTRY_CITIES":
      return produce(state, draft => {
        draft.cities = action.payload.cities;
        draft.countryName = action.payload.countryName;
      });
    default:
      return state;
  }
}
