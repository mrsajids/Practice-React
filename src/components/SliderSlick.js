import React, { useRef } from "react";
import Slider from "react-slick";
import '../App.css'


function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
        <div {...otherProps}>
            <div class="card testimonial-card mt-2 mb-3 mx-2">
                <div class="card-up aqua-gradient"></div>
                <div class="avatar mx-auto white">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle img-fluid"
                        alt="woman avatar" />
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title font-weight-bold">Martha Smith</h4>
                    <hr />
                    <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                        adipisci</p>
                </div>
            </div>
        </div>
    );
}

function AutoPlayMethods() {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className="slider-container">
            <h2>Auto Play {"&"} Pause with buttons</h2>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <CustomSlide index={1} />
                <CustomSlide index={2} />
                <CustomSlide index={3} />
                <CustomSlide index={4} />
                <CustomSlide index={5} />
                <CustomSlide index={6} />
            </Slider>
            <br /><br />
            <div style={{ textAlign: "center" }}>
                <button className="button" onClick={play}>
                    Play
                </button>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div>
        </div>
    );
}
export default AutoPlayMethods;
