import React from "react";
import ReactDOM from "react-dom";

import PellaNavbar from "./jsx/navbar";
import PellaImage from "./jsx/pellaImg";
import Display from "./jsx/display";


Display(<PellaNavbar />, "index");
Display(<PellaNavbar />, "release-navbar");
Display(<PellaImage />, "image");
