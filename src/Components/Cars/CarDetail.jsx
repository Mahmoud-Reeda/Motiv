import React, { useState } from "react";

import style from "./CarsList.module.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoMdRepeat } from "react-icons/io";
const CarDetail = ({ car_detail }) => {
  const [heartCarIcon, setHeartCarIcon] = useState(false);

  return (
    <div className={style.car}>
      <header>
        <div className={style.car_info}>
          <div className={style.title}>{car_detail.car_model}</div>
          <p>{car_detail.car}</p>
        </div>
        {heartCarIcon ? (
          <FaHeart
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => setHeartCarIcon(false)}
          />
        ) : (
          <FaRegHeart
            style={{ cursor: "pointer" }}
            onClick={() => setHeartCarIcon(true)}
          />
        )}
      </header>
      <img src="#" alt="car title" />

      <footer>
        <div className={style.possibilities}>
          <div className={style.person}>
            <GoPerson /> <span>{car_detail.person_count}</span>
          </div>
          <div className={style.manual}>
            <IoMdRepeat /> <span>Manual</span>
          </div>
        </div>

        <div className={style.price}>
          <span>{car_detail.price}</span>/d
        </div>
      </footer>
    </div>
  );
};

export default CarDetail;
