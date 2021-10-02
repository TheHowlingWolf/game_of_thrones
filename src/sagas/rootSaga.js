import { all, fork } from "@redux-saga/core/effects";
import watcherForBooksApi from "./BooksSagas/booksMenuSaga";
import watcherForFetchMoreBooksApi from "./BooksSagas/fetchMoreBooksSaga";
import watcherForOptionMenuSaga from "./optionsMenuSaga";

export default function* rootSaga() {
  yield all([
    fork(watcherForOptionMenuSaga),
    fork(watcherForBooksApi),
    fork(watcherForFetchMoreBooksApi),
  ]);
}
