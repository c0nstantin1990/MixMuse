import React from "react";

function FeaturedProducts() {
    return (
        <div style={{ height: "100px !important" }}>
            <div
                id="myCarousel"
                class=" carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        class="active"
                    >
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                    </li>
                </ol>

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
                            <p class="fs-3">Click below to search featured spirits for your next cocktail creation</p>
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
                                Click below to search featured equipment and build your dream bar today
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
                            <p class="fs-3">Click below to search featured mixers for your next cocktail creation</p>
                            <a href="/categoryMenu" class="btn btn-outline-light">
                                Fetaured Mixers
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
                            <p class="fs-3">Leave your thoughts on products and share your insight with other bartenders</p>
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
// import React from "react";

// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// const FeaturedProducts = () => {
//     return (
//         <div style={{ height: "100px" }}>
//             <div
//                 id="mycarousel"
//                 className="carousel slide"
//                 data-bs-ride="carousel"
//                 data-bs-interval="3000" // Automatically transition to the next image every 3 seconds
//             >
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img
//                             src="http://cdnimg.webstaurantstore.com/uploads/design/2014/1/bartender-school.jpg"
//                             className="d-block w-100"
//                             alt="Featured Liquor"
//                         />
//                     </div>

//                     <div className="carousel-item visually-hidden">
//                         <img
//                             src="https://tse4.mm.bing.net/th?id=OIP.JOVOxYezn45bUBcn1168XAHaDR&pid=Api&P=0&h=220"
//                             className="d-block w-100"
//                             alt="Featured Equipment"
//                         />
//                     </div>

//                     <div className="carousel-item visually-hidden">
//                         <img
//                             src="https://i.ytimg.com/vi/vp1rxlaf0GQ/maxresdefault.jpg"
//                             className="d-block w-100"
//                             alt="Featured Mixers"
//                         />
//                     </div>
//                 </div>

//                 <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#mycarousel"
//                     data-bs-slide="prev"
//                 >
//                     <span className="carousel-control-prev-icon" aria-hidden="true">
//                         <BsChevronLeft />
//                     </span>

//                     <span className="visually-hidden">Previous</span>
//                 </button>

//                 <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#mycarousel"
//                     data-bs-slide="next"
//                 >
//                     <span className="carousel-control-next-icon" aria-hidden="true">
//                         <BsChevronRight />
//                     </span>

//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FeaturedProducts;
