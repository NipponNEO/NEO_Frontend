import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Leads from "../Pages/Leads";
import Plan from "../Pages/Plan";
import Report from "../Pages/Report";
import Menu from "../Pages/Menu";
import Footer from "../Components/Footer";
import GeneralDetails from "../Pages/GeneralDetails";
import SiteSummaryHL from "../Pages/SiteSummaryHL";
import Login from "../Pages/Login";
import Weekview from "../CalendarModule/Pages/Weekview";
// import Payment from "../Components/Payment";
// import SiteClosure from "./../Components/SiteClosure";
// import EstimateView from "../Pages/Estimate";

// import Interior from "../Pages/Interior";
import Accord from "../Pages/Accordion";
import Workorder from "../Components/Workorder";
import SiteInspection from "../Pages/SiteInspection";
import LeadPreference from "../Pages/Preference";
const Routing = () => {
  return (
    <React.Fragment>
      <Footer>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/" component={Weekview} />
          <Route exact={true} path="/leads" component={Leads} />
          <Route
            exact={true}
            path="/leads/GeneralDetails"
            component={GeneralDetails}
          />
          <Route
            exact={true}
            path="/leads/sitesummary"
            component={SiteSummaryHL}
          />
          <Route exact={true} path="/leads/Accord" component={Accord} />
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/plan" component={Plan} />
          <Route exact={true} path="/report" component={Report} />
          <Route exact={true} path="/lead/preference" component={LeadPreference} />
          {/* <Route exact={true} path="/leads/Estimate" component={EstimateView} /> */}
          {/* <Route exact={true} path="/leads/Workorder" component={Workorder} /> */}
          {/* <Route exact={true} path="/payment" component={Payment} /> */}
          {/* <Route exact={true} path="/siteclosure" component={SiteClosure} /> */}
          {/* <Route exact={true} path="/Estimate" component={EstimateView} /> */}

          <Route
            exact={true}
            path="/leads/siteInspection"
            component={SiteInspection}
          />
        </Switch>
      </Footer>
    </React.Fragment>
  );
};

export default Routing;
