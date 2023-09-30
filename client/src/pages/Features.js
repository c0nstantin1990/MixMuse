import React from "react";

function FeaturedProducts() {
  return (
    <div style={{ height: "100px !important" }}>
      <div
        id="myCarousel"
        class=" carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item main-carousel-item active">
            <div
              class="overlay-image"
              style={{
                backgroundImage:
                  "url('http://cdnimg.webstaurantstore.com/uploads/design/2014/1/bartender-school.jpg')",
              }}
            ></div>
            <div
              class=" container main-page-container "
              style={{ marginTop: "60px" }}
            >
              <h1 class="fw-bold">Check Out Our Featured Liquor</h1>
              <p class="fs-3">
                Click below to search featured spirits for your next cocktail
                creation
              </p>
              <a href="/categoryMenu" class="btn btn-outline-light">
                Featured Liquor
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://cdn.webshopapp.com/shops/273775/files/332466292/cocktails.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container "
              style={{ marginTop: "60px" }}
            >
              <h1 class="fw-bold">Check Out Our Featured Equipment</h1>
              <p class="fs-3">
                Click below to search featured equipment and build your dream
                bar today
              </p>
              <a href="/categoryMenu" class="btn btn-outline-light">
                Featured Equipment
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://jimymacspub.com/wp-content/uploads/2019/11/screen-shot-2019-11-26-at-10.19.27-am.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              <h1 class="fw-bold">Check Out Our Featured Mixers</h1>
              <p class="fs-3">
                Click below to search featured mixers for your next cocktail
                creation
              </p>
              <a href="/categoryMenu" class="btn btn-outline-light">
                Feataured Mixers
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://bartendersbusiness.com/en/articles/images/w/1200/BartendersBusiness-01222019060923000000-5c46b393188eb.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container"
              style={{ marginTop: "60px" }}
            >
              <h1 class="fw-bold">Rate and Review Products Here</h1>
              <p class="fs-3">
                Leave your thoughts on products and share your insight with
                other bartenders
              </p>
              <a href="/categoryMenu" class="btn btn-outline-light">
                Leave your thoughts!
              </a>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          class="carousel-control-prev"
          role="button"
          data-bs-slide="prev"
        >
          <span class="sr-only"></span>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          href="#myCarousel"
          class="carousel-control-next"
          role="button"
          data-bs-slide="next"
        >
          <span class="sr-only"></span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProducts;
