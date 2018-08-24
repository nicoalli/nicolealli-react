import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import Main from "./main";

ReactDOM.render(
  <HashRouter><Main/></HashRouter>,
  document.getElementById("root")
);
