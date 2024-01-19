import React from "react";
import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.lds_dual_ring}></div>
    </div>
  );
};

export default Loading;
