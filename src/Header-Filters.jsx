import React, { useState } from "react";
import { hotelsData } from "../public/data";
import HotelsList from "../src/Hotels-list";

export default function Header(props) {
  let [dateFrom, setDateFrom] = useState("");
  let [dateTo, setDateTo] = useState("");
  let [country, setCountry] = useState("All");
  let [price, setPrice] = useState(0);
  let [size, setSize] = useState("All");

  //fechas Unix
  const dateS = new Date(dateFrom).getTime(dateFrom);
  const dateF = new Date(dateTo).getTime(dateTo);

  //estado date entrada
  const changeDateFrom = (event) => {
    let dateFrom = event.target.value;
    setDateFrom(dateFrom);
  };

  //estado date salida
  const changeDateTo = (event) => {
    let dateTo = event.target.value;
    setDateTo(dateTo);
  };

  //estado pais
  const changeCountry = (event) => {
    let country = event.target.value;
    setCountry(country);
  };

  //estado precio
  const changePrice = (event) => {
    let price = parseInt(event.target.value);
    setPrice(price);
  };

  //estado tamaño
  const changeSize = (event) => {
    let size = event.target.value;
    setSize(size);
  };


  //filtros

  const createList = () => {
    const newList = hotelsData
      .filter((hotel) => {
        if (dateFrom !== "" && dateTo !== "") {
          return(
            dateS <= hotel.availabilityFrom && dateF <= hotel.availabilityTo
          );
        }
        return hotel;
      })
      .filter((hotel) => {
        if (country !== "All") {
          return hotel.country === country;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (price !== 0) {
          return hotel.price === parseInt(price);
        }
        return hotel;
      })
      .filter((hotel) => {
        if (size !== "All") {
          if (size === "Small") {
            return hotel.rooms <= 10;
          } else if (size === "Medium") {
            return hotel.rooms > 10 && hotel.rooms <= 20;
          } else if (size === "Big") {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      });
    return newList;
  };

  let listfiltered = createList();

  //boton limpiar
  const changeReset = () => {
    setDateFrom("");
    setDateTo("");
    setCountry("All");
    setPrice(0);
    setSize("All");
  };

  //funcion precio
  const showPrice = (price) => {
    if (price === 0) {
      return ``;
    } else if (price === 1) {
      return `Económico`;
    } else if (price === 2) {
      return `Barato`;
    }else if (price === 3) {
      return `Costoso`;
    }else if (price === 4) {
      return `Muy Costoso`;
    }
  }

   //funcion tamaño
  const showSize = (size) => {
    if (size === "All") {
      return ``;
    } else if (size === "Small") {
      return `Pequeño`;
    } else if (size === "Medium") {
      return `Mediano`;
    } else if (size === "Big") {
      return `Grande`;
    }
  }


  //componente

  return (
    <div className="container-header">
      <div className="header">
        <h1>HOTELES CARIBE</h1>
        <div className="t-placeholders">
          <p>Tu buscador preferido de hoteles...</p>
          <p className="description">
            {dateFrom !== "" ? ` Desde el ${dateFrom} ` : ""}
            {dateTo !== "" ? ` Hasta el ${dateTo} ` : ""}
            {country !== "All" ? ` En ${country} ` : ""}
            {price !== 0 ? ` De precio ${showPrice(price)} ` : ""}
            {size !== "All" ? ` De tamaño ${showSize(size)} ` : ""}
          </p>
        </div>
      </div>
      {/* Filtros */}
      <div className="container-filters">
        <div className="filters">
          <input
            className="dateTo icons-form"
            value={dateFrom}
            onChange={changeDateFrom}
            type="date"
          ></input>
          <input
            className="dateFrom icons-form"
            min={dateFrom}
            value={dateTo}
            onChange={changeDateTo}
            type="date"
          ></input>

          <select
            className="country-icon icons-form"
            value={country}
            onChange={changeCountry}
          >
            <option value="All">Todos los países</option>
            <option value="Argentina">Argentina</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
          </select>

          <select
            className="price-icon icons-form"
            value={price}
            onChange={changePrice}
          >
            <option value={0}>Cualquier precio</option>
            <option value={1}>$</option>
            <option value={2}>$$</option>
            <option value={3}>$$$</option>
            <option value={4}>$$$$</option>
          </select>

          <select
            className="size icons-form"
            value={size}
            onChange={changeSize}
          >
            <option value="All">Cualquier tamaño</option>
            <option value="Small">Pequeño</option>
            <option value="Medium">Mediano</option>
            <option value="Big">Grande</option>
          </select>

          <button className="reset" onClick={changeReset}>
            <img src="./images/means/garbaje.svg" alt="gabaje"/>
            LIMPIAR
          </button>
        </div>
        <HotelsList listfiltered={listfiltered} />
      </div>
    </div>
  );
}
