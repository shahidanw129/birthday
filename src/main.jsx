import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./css/global.css";
import "./css/login.css";
import "./css/dashboard.css";
import "./css/sidebar.css";
import "./css/navbar.css";
import "./css/gallery.css";
import "./css/animation.css";
import "./css/responsive.css";


ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <BrowserRouter>

        <App />

    </BrowserRouter>

);