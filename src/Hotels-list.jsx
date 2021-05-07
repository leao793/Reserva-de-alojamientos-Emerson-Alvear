import Hotels from "../src/Hotel";
import Error from "../src/Error";

//componente
export default function HotelsList({ listfiltered }) {
  return (
    <div className="hotel-results">
      {listfiltered.length > 0 ? (
        listfiltered.map((hotel) => (
          <Hotels
            slud={hotel.slud}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            rooms={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
            price={hotel.price}
          />
        ))
      ) : (
        <Error />
      )}
    </div>
  );
}
