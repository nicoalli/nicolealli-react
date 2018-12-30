import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./main";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}><Main/></HashRouter>,
  document.getElementById("root")
);
