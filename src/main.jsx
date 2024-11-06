import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/1.Header/Header.jsx";
import Hero from "./Components/2.Hero/Hero.jsx";
import Companies from "./Components/5.Companies/Companies.jsx";
import Quality from "./Components/3.Quality/Quality.jsx";
import Services from "./Components/4.Services/Services.jsx";
import Contact from "./Components/6.Contact/Contact.jsx";
import MapPS from "./Components/7.Map/Map.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Hero />
    <slider />
    <Quality />
    <Services />
    <Companies />
    <Contact />
    <MapPS />
  </StrictMode>
);
