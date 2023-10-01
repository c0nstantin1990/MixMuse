import React from "react";

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
                backgroundImage:
                  "url('http://cdnimg.webstaurantstore.com/uploads/design/2014/1/bartender-school.jpg')",
              }}
            ></div>
            <div
              className=" container main-page-container "
              style={{ marginTop: "60px" }}
            >
              <h1 className="fw-bold">Check Out Our Featured Liquor</h1>
              <p className="fs-3">
                Click below to search featured spirits for your next cocktail
                creation
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Liquor
              </a>
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url("https://cdn.webshopapp.com/shops/273775/files/332466292/cocktails.jpg")`,
              }}
            ></div>
            <div
              className="container main-page-container "
              style={{ marginTop: "60px" }}
            >
              <h1 className="fw-bold">Check Out Our Featured Equipment</h1>
              <p className="fs-3">
                Click below to search featured equipment and build your dream
                bar today
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Equipment
              </a>
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url("https://jimymacspub.com/wp-content/uploads/2019/11/screen-shot-2019-11-26-at-10.19.27-am.jpg")`,
              }}
            ></div>
            <div
              className="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              <h1 className="fw-bold">Check Out Our Featured Mixers</h1>
              <p className="fs-3">
                Click below to search featured mixers for your next cocktail
                creation
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Featured Mixers
              </a>
            </div>
          </div>
          <div className="carousel-item main-carousel-item">
            <div
              className="overlay-image"
              style={{
                backgroundImage: `url("https://bartendersbusiness.com/en/articles/images/w/1200/BartendersBusiness-01222019060923000000-5c46b393188eb.jpg")`,
              }}
            ></div>
            <div
              className="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              <h1 className="fw-bold">Rate and Review Products Here</h1>
              <p className="fs-3">
                Leave your thoughts on products and share your insight with
                other bartenders
              </p>
              <a href="/categoryMenu" className="btn btn-outline-light">
                Leave your thoughts!
              </a>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-bs-slide="next"
        >
          <span className="sr-only"></span>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProducts;
