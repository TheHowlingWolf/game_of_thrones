/* Category Actions */

import { optionMenuConstants, booksConstants } from "../constants/Constant";

export const optionMenuApiStart = () => ({
  type: optionMenuConstants.OPTIONS_API_START,
});
export const optionMenuApiSuccess = (payload) => ({
  type: optionMenuConstants.OPTIONS_API_SUCCESS,
  payload,
});
export const optionMenuApiFailed = (payload) => ({
  type: optionMenuConstants.OPTIONS_API_FAILED,
  payload,
});

/* Book Actions */

export const booksApiStart = () => ({
  type: booksConstants.BOOKS_API_START,
});
export const booksApiSuccess = (payload) => ({
  type: booksConstants.BOOKS_API_SUCCESS,
  payload,
});
export const booksApiFailed = (payload) => ({
  type: booksConstants.BOOKS_API_FAILED,
  payload,
});
export const booksApiUpdatePageControls = (payload) => ({
  type: booksConstants.BOOKS_API_UPDATE_PAGE_CONTROLS,
  payload,
});
export const booksApiFetchMoreData = () => ({
  type: booksConstants.BOOKS_API_FETCH_MORE_DATA,
});
export const booksApiFetchMoreDataSuccess = (payload) => ({
  type: booksConstants.BOOKS_API_FETCH_MORE_DATA_SUCCESS,
  payload,
});
