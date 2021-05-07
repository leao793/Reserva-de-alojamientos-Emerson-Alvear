//Componente

export default function Hotels({
  photo,
  name,
  description,
  country,
  city,
  rooms,
  price
}) {
  const reserveHotel = () => {
    alert("TU HOTEL HA SIDO RESERVADO");
  };

  return (
    <div className="hotel-container">
      <div className="hotel-img">
        <img src={photo} alt="img-hotel" />
      </div>
      <div className="hotel-info">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="country">
          <img src="./images/means/location.png" alt="location" />
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="rooms-price">
          <img src="./images/means/bed.svg" alt="rooms" />
          <p>{rooms} habitaciones</p>
          <div className="price">
            {price >= 1 ? (
              <img src="./images/means/price-white.svg" alt="price-white" />
            ) : (
              <img src="./images/means/price-opacity.svg" alt="price-opacity" />
            )}
            {price > 1 ? (
              <img src="./images/means/price-white.svg" alt="price-white" />
            ) : (
              <img src="./images/means/price-opacity.svg" alt="price-opacity" />
            )}
            {price > 2 ? (
              <img src="./images/means/price-white.svg" alt="price-white" />
            ) : (
              <img src="./images/means/price-opacity.svg" alt="price-opacity" />
            )}
            {price > 3 ? (
              <img src="./images/means/price-white.svg" alt="price-white" />
            ) : (
              <img src="./images/means/price-opacity.svg" alt="price-opacity" />
            )}
          </div>
        </div>
        <button onClick={reserveHotel}>RESERVAR</button>
      </div>
    </div>
  );
}
