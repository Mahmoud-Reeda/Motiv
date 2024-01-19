import React from "react";
import style from "./CarsList.module.css";
import CarDetail from "./CarDetail";

const CarsList = ({ cars }) => {
  const carList = cars?.map((car_detail) => (
    <CarDetail key={car_detail.id} car_detail={car_detail} />
  ));

  return (
    <div className={style.carsList}>
      {cars?.length === 1 ? (
        <CarDetail key={cars.id} car_detail={cars[0]} />
      ) : (
        carList
      )}
    </div>
  );
};

export default CarsList;
