import React from "react";
import web from "../src/images/img.svg";

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Grow your business at{" "}
                  <strong className="brand-name">ReactWeb</strong>
                </h1>
                <h2 className="mt-3">
                  We are the team of talented developer making websites
                </h2>
                <div className="mt-3">
                  <a href="" className="btn-get-started ">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-lg-6 oder-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="home img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
