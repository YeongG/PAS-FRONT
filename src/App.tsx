import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slider } from "./components";
import GlobalStyle from "./GlobalStyle";
import {
  AnalysisPage,
  IndexPage,
  ModalPage,
  RealtimePage,
  UploadPage,
  HistoryPage,
} from "./pages";
import { history } from "./modules";

const App: FC = () => {
  return (
    <Router history={history}>
      <ToastContainer />
      <GlobalStyle />
      <Slider />
      <ModalPage />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/upload" component={UploadPage} />
        <Route exact path="/realtime" component={RealtimePage} />
        <Route exact path="/analysis" component={AnalysisPage} />
        <Route exact path="/history" component={HistoryPage} />
      </Switch>
    </Router>
  );
};

export default App;
