import React from 'react';
import Slider from 'react-slick';
import './Sliderimage.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderimage = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const partnerImages = [
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/Accenture.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/BajajLogo.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/TCSLogo.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/IBM.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/WpiroLogo.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/BajajLogo.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/TCSLogo.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/Accenture.jpg",
        "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/WpiroLogo.jpg",

    ];

    return (
        <div className="container" style={{ backgroundColor: "#dee2e6",height:'300px' }}>
            <h2 style={{fontWeight:'bolder',textShadow:'2px 2px 5px red'}}>Our Top Recruiters</h2>
            <Slider className="customer-logos" {...settings}>
                {partnerImages.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Partner ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Sliderimage;