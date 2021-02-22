import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarrouselItem.scss';

const CarrouselItem = ({cover, title,  year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/play--v1.png" />
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/plus.png" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarrouselItem;