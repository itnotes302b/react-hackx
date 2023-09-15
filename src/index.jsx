import React from "react";
import ReactDOMClient from "react-dom/client";
import { Landing } from "./screens/Landing";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Landing />);
