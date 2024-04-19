import HeaderSite from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Brands from "./layout/brands/Brands.tsx";
import RequestService from "./layout/contact/RequestService.tsx";
import Content from "./layout/content/Content.tsx";
import React from "react";
import Slide from "./layout/slide/Slide.tsx";
import Depositions from "./layout/depositions/Depositions.tsx";
import Services from "./layout/services/Services.tsx";

const App = () => {
  return (
    <React.Fragment>
      <HeaderSite />
      <Slide />
      <Content />
      <RequestService />
      <Services />
      <Depositions />
      <Brands />
      <Footer />
    </React.Fragment>
  )
}

export default App;