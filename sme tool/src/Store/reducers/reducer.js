import {
  PAGE_CHANGED,
  PAGE_SIZE_CHANGED,
  TOTAL_COUNT_CHANGED,
  SEARCH_CHANGED,
  ORDER_BY_CHANGED,
  ORDER_CHANGED,
  SME_REPORT_PAGE_CHANGE,
  SME_REPORT_SEARCH,
  VENDOR_REPORT_PAGE_CHANGE,
  VENDOR_REPORT_SEARCH,
  CANDIDATE_TYPE_CHANGE,
  PARTNER_STATUS_CHANGED
} from "../actions/actions";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: payload,
      };
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: payload,
      };
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: payload,
      };
      case CANDIDATE_TYPE_CHANGE:
      return {
        ...state,
        status: payload,
      };
    case SEARCH_CHANGED:
      return {
        ...state,
        querySearch: payload,
      };
      case PARTNER_STATUS_CHANGED:
      return {
        ...state,
        status: payload,
      };
    case ORDER_BY_CHANGED:
      return {
        ...state,
        queryOrderBy: payload,
      };
    case ORDER_CHANGED:
      return {
        ...state,
        queryOrder: payload,
      };
    case SME_REPORT_PAGE_CHANGE:
      return {
        ...state,
        queryCurrentIndex: payload,
      };
    case SME_REPORT_SEARCH:
      return {
        ...state,
        querySmeSearch: payload,
      };
    case VENDOR_REPORT_PAGE_CHANGE:
      return {
        ...state,
        queryVendorCurrentIndex: payload,
      };
    case VENDOR_REPORT_SEARCH:
      return {
        ...state,
        queryVendorSearch: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
