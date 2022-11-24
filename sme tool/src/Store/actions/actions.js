export const PAGE_CHANGED = "PAGE_CHANGED";
export const PAGE_SIZE_CHANGED = "PAGE_SIZE_CHANGED";
export const CANDIDATE_TYPE_CHANGE = "CANDIDATE_TYPE_CHANGE"
export const TOTAL_COUNT_CHANGED = "TOTAL_COUNT_CHANGED";
export const SEARCH_CHANGED = "SEARCH_CHANGED";
export const COMPANY_TYPE_CHANGED = "COMPANY_TYPE_CHANGED";
export const ORDER_BY_CHANGED = "ORDER_BY_CHANGED";
export const ORDER_CHANGED = "ORDER_CHANGED";
export const PARTNER_STATUS_CHANGED = "PARTNER_STATUS_CHANGED";
export const SME_REPORT_PAGE_CHANGE = "SME_REPORT_PAGE_CHANGED";
export const SME_REPORT_SEARCH = "SME_REPORT_SEARCH";
export const VENDOR_REPORT_PAGE_CHANGE = "VENDOR_REPORT_PAGE_CHANGE"
export const VENDOR_REPORT_SEARCH = "VENDOR_REPORT_SEARCH"

export const pageChange = (pageIndex) => {
  return { type: PAGE_CHANGED, payload: pageIndex };
};

export const pageSizeChange = (pageSize) => {
  return { type: PAGE_SIZE_CHANGED, payload: pageSize };
};

export const candidateTypeChange = (status) => {
  return { type: CANDIDATE_TYPE_CHANGE, payload: status };
};

export const partnerStatusChange = (status) => {
  return { type: PARTNER_STATUS_CHANGED, payload: status };
};

export const totalCountChange = (count) => {
  return { type: TOTAL_COUNT_CHANGED, payload: count };
};

export const companyTypeChange = (companyType) => {
  return { type: COMPANY_TYPE_CHANGED, payload: companyType };
};

export const searchChange = (searchText) => {
  return { type: SEARCH_CHANGED, payload: searchText };
};

export const orderByChange = (orderBy) => {
  return { type: ORDER_BY_CHANGED, payload: orderBy };
};

export const orderChange = (order) => {
  return { type: ORDER_CHANGED, payload: order };
};

export const smeReportPageChange = (pageIndex) => {
  return { type: SME_REPORT_PAGE_CHANGE, payload: pageIndex };
};

export const smeReportSearch = (searchData) => {
  return { type: SME_REPORT_SEARCH, payload: searchData };
};

export const vendorReportPageChange = (pageIndex) =>{
  return { type: VENDOR_REPORT_PAGE_CHANGE, payload: pageIndex }
}

export const vendorReportSearch = (searchData) => {
  return { type: VENDOR_REPORT_SEARCH, payload: searchData };
};