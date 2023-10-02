import React from "react";
import main1 from "../assets/main1.jpeg";
import main2 from "../assets/main2.jpeg";
import main3 from "../assets/main3.jpeg";
import main4 from "../assets/main4.jpeg";

function FeaturedProducts() {
  return (
    <div style={{ height: "100px !important" }}>
      <div
        id="myCarousel"
        className=" carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item main-carousel-item active">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url(${main1})`,
              }}
            ></div>
            <div
              className=" container main-page-container test1 "
              style={{ marginTop: "60px" }}
            >
              {/* <div className="test1">
              <h1 className="fw-bold" >Check Out Our Featured Liquor</h1>
              <p className="fs-3">
                Click below to search featured spirits for your next cocktail
                creation
              </p>
              </div> */}
              {/* <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Liquor
              </a> */}
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url(${main2})`,
              }}
            ></div>
            <div
              className="container main-page-container "
              style={{ marginTop: "60px" }}
            >
              {/* <h1 className="fw-bold">Check Out Our Featured Equipment</h1>
              <p className="fs-3">
                Click below to search featured equipment and build your dream
                bar today
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Equipment
              </a> */}
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url(${main3})`,
              }}
            ></div>
            <div
              className="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              {/* <h1 className="fw-bold">Check Out Our Featured Mixers</h1>
              <p className="fs-3">
                Click below to search featured mixers for your next cocktail
                creation
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Mixers
              </a> */}
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url(${main4})`,
              }}
            ></div>
            <div
              className="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              {/* <h1 className="fw-bold overlay">Rate and Review Products Here</h1>
              <p className="fs-3 overlay">
                Leave your thoughts on products and share your insight with
                other bartenders
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Leave your thoughts!
              </a> */}
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          className="carousel-control-prev"
          role="button"
          data-bs-slide="prev"
        >
          <span className="sr-only"></span>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-bs-slide="next"
        >
          <span className="sr-only"></span>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProducts;
