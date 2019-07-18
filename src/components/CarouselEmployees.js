import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// eslint-disable-next-line
import { Link } from 'react-router-dom'


export default function ({ employees }) {

    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            width="500px"
            dynamicHeight={true}
            centerMode={true}
            centerSlidePercentage={40}
        >
            {employees.map((elem) =>
                (
                    <Link to={`/employee/${elem.id}`}>
                        <img src={`https://i.pravatar.cc/400/${elem.imgSrc}`} alt="Avatar" key={elem.id} />
                    </Link>
                )
            )}
        </Carousel>
    )
}