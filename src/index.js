import React from "react";
import ReactDOM from "react-dom";

import PellaNavbar from "./jsx/navbar";
import PellaImage from "./jsx/pellaImg";
import ReleaseCard from "./jsx/releaseCard";
import Display from "./jsx/display";

import "../releases/v0.0.1/heroesandcreatures-v0.0.1.tar.gz";
import "../releases/v0.0.1/heroesandcreatures-v0.0.1.zip";
import "../releases/v0.0.1/heroesandcreatures-v0.0.1.so";
import "../releases/v0.0.1/heroesandcreatures-v0.0.1.dll";

Display(<PellaNavbar />, "index");
Display(<PellaNavbar />, "release-navbar");
Display(<PellaImage />, "image");
Display(<ReleaseCard />, "releases-card");
