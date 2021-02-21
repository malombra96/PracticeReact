import React from 'react';
import '../assets/styles/components/CarrouselItem.scss';

const CarrouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1769395/pexels-photo-1769395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/play--v1.png" />
                <img className="carousel-item__details--img" src="https://img.icons8.com/flat_round/64/000000/plus.png" />
            </div>
            <p className="carousel-item__details--title">Titulo Descrciptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarrouselItem;