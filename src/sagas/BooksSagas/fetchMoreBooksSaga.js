import { booksConstants } from "@constants/Constant";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { callAxios } from "@services";
import {
  booksApiUpdatePageControls,
  booksApiFetchMoreDataSuccess,
  booksApiFailed,
} from "@actions";

const getBooksURL = (state) => state.optionReducer?.data?.books;
const getCurrPageNum = (state) => state.booksReducer.currentPage;
const getCurrPageSize = (state) => state.booksReducer.pageSize;

function* workerForFetchMoreBooksApi() {
  const BooksURL = yield select(getBooksURL);
  const pageSize = yield select(getCurrPageSize);
  const pageNum = yield select(getCurrPageNum);

  console.log(`${BooksURL}?page=${pageNum}&pageSize=${pageSize}`);
  const data = yield call(
    callAxios,
    `${BooksURL}?page=${pageNum}&pageSize=${pageSize}`
  );

  if (data?.length < pageSize) {
    yield put(booksApiUpdatePageControls(false));
  } else if (data?.length === pageSize) {
    yield put(booksApiUpdatePageControls(true));
  }

  if (data && data?.length > 0) {
    yield put(booksApiFetchMoreDataSuccess(data));
  } else {
    yield put(booksApiFailed());
  }
}

export default function* watcherForFetchMoreBooksApi() {
  yield takeLatest(
    booksConstants.BOOKS_API_FETCH_MORE_DATA,
    workerForFetchMoreBooksApi
  );
}
