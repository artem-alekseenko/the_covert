import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


export default function ({ employees }) {

    return (
        <Carousel
            className="carouselEmployees"
            showThumbs={false}
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            width="500px"
            dynamicHeight={true}
            centerMode={true}
            centerSlidePercentage={35}
        >
            {employees.map((elem) =>
                (
                    <Link to={`/employee/${elem.id}`} key={elem.id}>
                        <img src={`https://i.pravatar.cc/400/${elem.imgSrc}`} alt="Avatar" />
                    </Link>
                )
            )}
        </Carousel>
    )
}