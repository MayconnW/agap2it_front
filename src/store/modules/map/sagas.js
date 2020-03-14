import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "services/api";
import { setCountryCities } from "./actions";

export function* loadCountryInfo({ payload }) {
  const { country } = payload;
  if (!country) {
    return;
  }

  try {
    const { data } = yield call(api.get, `countries/${country}`);
    if (data && data.country) {
      const { name, cities } = data.country;
      yield put(setCountryCities(name, cities));
    }
  } catch (e) {
    // do nothing
  }
}

export default all([takeLatest("@map/SELECT_COUNTRY", loadCountryInfo)]);
