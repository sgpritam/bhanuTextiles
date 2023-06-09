import React from "react";
import Slider from "react-slick";

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

function Banner() {
  return (
    <section class="slider-area">
      <div class="slider-active">
        <Slider {...sliderSettings}>
          <div class="single-slider slider-bg1 slider-height d-flex align-items-center">
            <div class="container">
              <div class="rowr">
                <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                  <div class="hero-caption text-center">
                    <span>Fashion Sale</span>
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      Minimal Menz Style
                    </h1>
                    <p data-animation="fadeInUp" data-delay="0.4s">
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus dignissimos facilis
                      neque nulla earum.
                    </p>
                    <a
                      href="#"
                      class="btn_1 hero-btn"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="single-slider slider-bg2 slider-height d-flex align-items-center">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10">
                  <div class="hero-caption text-center">
                    <span>Fashion Sale</span>
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      Minimal Menz Style
                    </h1>
                    <p data-animation="fadeInUp" data-delay="0.4s">
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus dignissimos facilis
                      neque nulla earum.
                    </p>
                    <a
                      href="#"
                      class="btn_1 hero-btn"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
export default Banner;
