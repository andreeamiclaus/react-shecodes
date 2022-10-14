import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Temperature from "./Temperature";
import Search from "./Search";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>

  <div className="root">  
  <h2>Weather App</h2>
  <Temperature value={19} city="Tokyo" humidity={80} />
   <Temperature value={24} city="Paris" humidity={30} />
    <Temperature value={4} city="Oslo" humidity={0} />
    <Search/>
  </div>
   
  </StrictMode>
);
