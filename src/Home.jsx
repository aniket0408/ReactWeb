import React from "react";
import web from "../src/images/img.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your business at{" "}
                    <strong className="brand-name">ReactWeb</strong>
                  </h1>
                  <h2 className="mt-3">
                    Develop Dynamic Websites Using React.js
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started ">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 oder-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    align="right"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
