import React from "react";
import Navbar from "../../Components/Navbar_Component/Navbar";
import Hero from "../../Components/Hero_Component/Hero";
import SubHeader from "../../Components/SubHeader_Component/SubHeader";

const Home = () => {
  return (
    <div className="home_page">
      <section className="navbar_section">
        <Navbar />
      </section>
      <section className="hero_header_section">
        <Hero />
      </section>
      <section className="subHeader_section">
        <SubHeader />
      </section>
    </div>
  );
};

export default Home;
