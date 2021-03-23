import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slider } from "./components";
import GlobalStyle from "./GlobalStyle";
import { IndexPage, RealtimePage, UploadPage } from "./pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <GlobalStyle />
      <Slider />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/upload" component={UploadPage} />
        <Route exact path="/realtime" component={RealtimePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
