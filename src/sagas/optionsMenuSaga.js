import { optionMenuApiSuccess, optionMenuApiFailed } from "@actions";
import { optionMenuConstants } from "@constants/Constant";
import { call, put, takeLatest } from "redux-saga/effects";
import { callAxios } from "@services/";

function* workerForOptionMenuSaga() {
  const data = yield call(callAxios, "https://www.anapioficeandfire.com/api");
  if (data) {
    yield put(optionMenuApiSuccess(data));
  } else {
    yield put(optionMenuApiFailed(data));
  }
}

export default function* watcherForOptionMenuSaga() {
  yield takeLatest(
    optionMenuConstants.OPTIONS_API_START,
    workerForOptionMenuSaga
  );
}
