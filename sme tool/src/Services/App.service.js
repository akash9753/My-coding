import axiosHttpRequest, {
  axiosHttpRequestStorage,
  axiosHttpRequestWithoutAuth,
} from "./axios";
import axios from "axios";

export const getDashboardCategories = async () => {
  try {
    return await axiosHttpRequest.get(`/getDashboardCategories`);
  } catch (err) {
    console.error("err", err);
  }
};

export const getDashboardOverview = async () => {
  try {
    return await axiosHttpRequest.get(`/getDashboardOverview`);
  } catch (err) {
    console.error("err", err);
  }
};

export const getSmeCategories = async () => {
  try {
    return await axiosHttpRequestWithoutAuth.get(`/getSmeCategories`);
  } catch (err) {
    console.error("err", err);
  }
};

export const getVendorDashboardCategories = async () => {
  try {
    return await axiosHttpRequest.get(`/getVendorDashboardCategories`);
  } catch (err) {
    console.error("error", err);
  }
};
export const getvendorDashboardOverview = async () => {
  try {
    return await axiosHttpRequest.get(`/getVendorDashboardOverview`);
  } catch (err) {
    console.error("error", err);
  }
};
export const getPrimaryDisciplines = async () => {
  try {
    return await axiosHttpRequestWithoutAuth.get(`/getPDisciplines`);
  } catch (err) {
    console.error("err", err);
  }
};

export const getCountries = async () => {
  try {
    return await axiosHttpRequestWithoutAuth.get(`/getCountries`);
  } catch (err) {
    console.error("err", err);
  }
};
export const getReportFilters = async () => {
  try {
    return await axiosHttpRequest.get(`/getReportFilters`);
  } catch (err) {
    console.error("err", err);
  }
};

export const editCandidateById = async (id) => {
  try {
    return await axiosHttpRequest.get(`/editCandidateById/${id}`);
  } catch (err) {
    console.error("err", err);
  }
};

// export const listCandidates = async (filterPage) => {
//   try {
//     return await axiosHttpRequest.get(`/listCandidates?${filterPage}`);
//   } catch (err) {
//     console.error("err", err);
//   }
// };

export const listCandidates = async (data) => {
  try {
    return await axiosHttpRequest.post(`/listCandidates`, data);
  } catch (err) {
    console.error("err", err);
  }
};

export const getSmeCategoryExpert = (data) => {
  return axiosHttpRequestWithoutAuth.post(`/getSmeCategoryExpert/${data}`);
};

export const deleteCandidateById = (id) => {
  return axiosHttpRequest.post(`/deleteCandidateById/${id}`);
};

export const searchReports = (data) => {
  return axiosHttpRequest.post(`/searchReports`, data);
};

export const createCandidate = (data) => {
  return axiosHttpRequest.post(`/createCandidate`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateCandidateById = (id, data) => {
  return axiosHttpRequest.post(`/updateCandidateById/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const downloadFile = async (fileName) => {
  try {
    return await axiosHttpRequestStorage.get(`/${fileName}`);
  } catch (err) {
    console.error("err", err);
  }
};

export const adminLogin = (data) => {
  return axiosHttpRequestWithoutAuth.post(`/adminLogin`, data);
};

export const updateAdminPassword = (id, data) => {
  return axiosHttpRequestWithoutAuth.post(`/updateAdminPassword/${id}`, data);
};

export const adminResetPassword = (data) => {
  return axiosHttpRequestWithoutAuth.post(`/adminResetPassword`, data);
};

export const listVendors = async (data) => {
  try {
    return await axiosHttpRequest.post(`/listVendors`, data);
  } catch (err) {
    console.error("err", err);
  }
};

export const getCompanyTypes = async () => {
  try {
    return await axiosHttpRequest.get(`/getCompanyTypes`);
  } catch (err) {
    console.error("err", err);
  }
};

export const deleteVendorById = (id) => {
  return axiosHttpRequest.get(`/deleteVendorById/${id}`);
};

export const getVendorServices = () => {
  return axiosHttpRequest.get(`/getServicesforVendors`);
};

export const getVendorProjects = () => {
  return axiosHttpRequest.get(`/getProjectsforVendors`);
};

export const createCompany = (data) => {
  return axiosHttpRequest.post(`/createVendor`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const adminProfileUpdate = (id, data) => {
  return axiosHttpRequest.post(`/adminProfileUpdate/${id}`, data);
};
export const updatePassword = (id, data) => {
  return axiosHttpRequest.post(`updatePassword/${id}`, data);
};

export const getCompanyDetailsById = async (id) => {
  try {
    return await axiosHttpRequest.get(`/editVendorbyId/${id}`);
  } catch (err) {
    console.error("err", err);
  }
};

// export const adminProfileUpdate = (id) => {
//   return axiosHttpRequest.post(`/adminProfileUpdate/${id}`);
// };

export const updateCompanyById = (data) => {
  return axiosHttpRequest.post("/updateVendor", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// export const adminProfileUpdate = (id) => {
//     return axiosHttpRequest.post(`/adminProfileUpdate/${id}`)
// }

export const searchVendorReports = async (data) => {
  return await axiosHttpRequest.post(`/vendorSearchReports`, data);
};

export const registerCandidate = (data) => {
  return axiosHttpRequest.post(`/registerCandidate`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const approveRejectCandidate = (data) => {
  return axiosHttpRequest.post(`/approveRejectCandidate?format=_json`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const registerCompany = (data) => {
  return axiosHttpRequest.post(`/registerCompany`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const approveRejectPartner = (data) => {
  return axiosHttpRequest.post(`/approveRejectVendor?format=_json`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getNotificationCountDetail = async () => {
  try {
    return await axiosHttpRequest.get(`/listNotification`);
  } catch (err) {
    console.error("err", err);
  }
};

export const updateNotification = (data) => {
  return axiosHttpRequest.post(`/updateNotification`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};