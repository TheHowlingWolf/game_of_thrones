import { put, call, select, takeLatest } from "redux-saga/effects";
import { booksConstants, mainApi } from "@constants/Constant";
import { callAxios } from "@services/index";
import {
  booksApiUpdatePageControls,
  booksApiSuccess,
  booksApiFailed,
  optionMenuApiSuccess,
} from "@actions";

const getOptionsData = (state) => state.optionReducer?.data;
const getBooksURL = (state) => state.optionReducer?.data?.books;
const getCurrPageNum = (state) => state.booksReducer.currentPage;
const getCurrPageSize = (state) => state.booksReducer.pageSize;

function* workerForBooksApi() {
  const optionsData = yield select(getOptionsData);
  const BooksURL = yield select(getBooksURL);
  const pageSize = yield select(getCurrPageSize);
  const pageNum = yield select(getCurrPageNum);
  let booksURL;
  if (Object.keys(optionsData)?.length === 0) {
    const urls = yield call(callAxios, mainApi.url);
    yield put(optionMenuApiSuccess(urls));
    booksURL = urls?.books;
  } else {
    booksURL = BooksURL;
  }

  const data = yield call(
    callAxios,
    `${booksURL}?page=${pageNum}&pageSize=${pageSize}`
  );

  if (data?.length < pageSize) {
    yield put(booksApiUpdatePageControls(false));
  } else if (data?.length === pageSize) {
    yield put(booksApiUpdatePageControls(true));
  }

  if (data && data?.length > 0) {
    yield put(booksApiSuccess(data));
  } else {
    yield put(booksApiFailed());
  }
}

export default function* watcherForBooksApi() {
  yield takeLatest(booksConstants.BOOKS_API_START, workerForBooksApi);
}
