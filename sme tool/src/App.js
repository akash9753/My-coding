import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditCandidate from "./Pages/Candidate/EditCandidate/editCandidate";
import "./App.css";
import AddnewCandidate from "./Pages/Candidate/AddNewCandidate/addNewCandidate";
import Dashboard from "./Pages/Dashboard/dashboard";
import LoginComp from "./Pages/Login/login";
import ViewReports from "./Pages/Reports/ViewReports/viewReports";
import ResetPassword from "./utils/Password/passwordReset/resetPassword";
import AccountSettings from "./commoncomp/Header/AccountSettings/accountSettings";
import { PrivateRoute, PublicRoute } from "./commoncomp/commonRoute";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import AddCompany from "./Pages/Vendor/AddCompany/addCompany";
import EditCompany from "./Pages/Vendor/EditCompany/editCompany";
import VendorReports from "./Pages/Reports/VendorReports/vendorReports";
import { QueryClientProvider, QueryClient } from "react-query";
import CandidateListTable from "./Pages/Candidate/CandidateList/CandidateListTable";
import CompanyListTable from "./Pages/Company/CompanyList/CompanyListTable";
import ViewReportsWithCardList from "./Pages/Reports/ViewReports/viewReportsWithCardList";
import UserHome from "./Pages/UserFlow/UserHomePage/userHome";
import QuickRegistration from "./Pages/UserFlow/UserRegistration/quickRegistrationForm";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import UserHomeNew from "./Pages/UserFlow/UserHomePage/UserHomeNew";
import PartnerRegistration from "./Pages/UserFlow/PartnerRegistration/PartnerRegistration";
import NewRegistrationCandidate from "./Pages/Candidate/ReviewCandidate/newRegistrationCandidate";
import RejectCandidate from "./Pages/Candidate/ReviewCandidate/rejectCandidate";
import PartnerRegistrationApprove from "./Pages/Candidate/ReviewPartner/PartnerRegistrationApprove";
import RejectPartner from "./Pages/Candidate/ReviewPartner/RejectPartner";
import PrivacyPolicy from "./utils/PrivacyPolicy/privacyPolicy";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <Routes>
              <Route
                exact
                path="/administrator/candidateList"
                element={
                  <PrivateRoute>
                    <CandidateListTable />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/login"
                element={
                  <PublicRoute>
                    <LoginComp />
                  </PublicRoute>
                }
              />
              <Route
                exact
                path="/administrator/add-candidate"
                element={
                  <PrivateRoute>
                    <AddnewCandidate />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/account-settings"
                element={
                  <PrivateRoute>
                    <AccountSettings />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/edit-candidate/:id"
                element={
                  <PrivateRoute>
                    <EditCandidate />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/candidate-reports"
                element={
                  <PrivateRoute>
                    <ViewReportsWithCardList />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/resetpassword/:id"
                element={
                  <PublicRoute>
                    <ResetPassword />
                  </PublicRoute>
                }
              />
              <Route
                exact
                path="/administrator/add-company"
                element={
                  <PrivateRoute>
                    <AddCompany />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/edit-company/:id"
                element={
                  <PrivateRoute>
                    <EditCompany />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/companyList"
                element={
                  <PrivateRoute>
                    <CompanyListTable />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/vendor-reports"
                element={
                  <PrivateRoute>
                    <VendorReports />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/review-candidate/:id"
                element={
                  <PrivateRoute>
                    <NewRegistrationCandidate />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/rejected-candidate/:id"
                element={
                  <PrivateRoute>
                    <RejectCandidate />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/review-partner/:id"
                element={
                  <PrivateRoute>
                    <PartnerRegistrationApprove />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/administrator/rejected-partner/:id"
                element={
                  <PrivateRoute>
                    <RejectPartner />
                  </PrivateRoute>
                }
              />

              <Route exact path="/" element={<UserHomeNew />} />
              <Route
                exact
                path="/candidate-registration"
                element={<QuickRegistration />}
              />
              <Route exact path="/linkedin" element={<LinkedInCallback />} />
              <Route exact path="/user-home" element={<UserHome />} />
              <Route
                exact
                path="/partner-registration"
                element={<PartnerRegistration />}
              />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </div>
  );
}
export default App;
