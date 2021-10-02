import { booksConstants } from "@constants/Constant";

const initState = {
  loading: false,
  data: [],
  currentPage: 1,
  pageSize: 5,
  hasNext: true,
};

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case booksConstants.BOOKS_API_START:
      return { ...state, loading: true, currentPage: 1, data: [] };
    case booksConstants.BOOKS_API_FAILED:
      return { ...state, loading: false };
    case booksConstants.BOOKS_API_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case booksConstants.BOOKS_API_FETCH_MORE_DATA:
      return { ...state, loading: true };
    case booksConstants.BOOKS_API_FETCH_MORE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case booksConstants.BOOKS_API_UPDATE_PAGE_CONTROLS:
      return {
        ...state,
        currentPage: action.payload ? state.currentPage + 1 : state.currentPage,
        hasNext: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
