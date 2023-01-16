import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container gird grid-two-column">
        <div className="section-hero-data">
        <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">THAPA TECHNICAL</h1>
          <p className="hero-para">
            I'm Akash Patel. A Full stack Developer, youtuber and freelancer. A Full
            stack Developer, youtuber and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/hero.svg" alt="hero" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;



export default HeroSection;
