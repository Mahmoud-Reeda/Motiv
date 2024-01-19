import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { NavLink } from "react-router-dom";

import { TiFlash } from "react-icons/ti";
import { BiSortAlt2 } from "react-icons/bi";
import { IoWater } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";

import "./DashboardNavLinks.css";

const DashboardNavLinks = () => {
  return (
    <div className="dashboard_links grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-[40px]">
      <NavLink to="/dashboard/energy">
        <div className="details_items bg-[#fff] p-[20px] flex items-center flex-col rounded-[10px]">
          <span className="p-[10px] text-[18px] rounded-[50%] text-[#ff9619] bg-[#ff97192a]">
            <TiFlash />
          </span>
          <h1 className="mx-[0] my-[15px] font-semibold text-[18px]">Energy</h1>
          <div className="w-[100px] h-[100px]">
            <CircularProgressbar
              value={60}
              text={`60%`}
              circleRatio={0.75}
              //
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: "#ff9619",
                textColor: "#ff9619",
              })}
            />
          </div>
        </div>
      </NavLink>

      <NavLink to="/dashboard/range">
        <div className="details_items bg-[#fff] p-[20px] flex items-center flex-col rounded-[10px]">
          <span className="p-[10px] text-[18px] rounded-[50%] text-[#ff7e86] bg-[#ff7e861a]">
            <BiSortAlt2 />
          </span>
          <h1 className="mx-[0] my-[15px] font-semibold text-[18px]">Range</h1>
          <div className="w-[100px] h-[100px]">
            <CircularProgressbar
              value={60}
              text={`60%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: "#FF7E86",
                textColor: "#FF7E86",
              })}
            />
          </div>
        </div>
      </NavLink>
      <NavLink to="/dashboard/break_fluid">
        <div className="details_items bg-[#fff] p-[20px] flex items-center flex-col rounded-[10px]">
          <span className=" p-[10px] text-[18px] rounded-[50%] text-[#0f2837] bg-[#0f283728]">
            <IoWater />
          </span>
          <h1 className="mx-[0] my-[15px] font-semibold text-[18px]">
            Break fluid
          </h1>
          <div className="w-[100px] h-[100px]">
            <CircularProgressbar
              value={60}
              text={`60%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: "#0f2837",
                textColor: "#0f2837",
              })}
            />
          </div>
        </div>
      </NavLink>
      <NavLink to="/dashboard/tire_wear">
        <div className="details_items bg-[#fff] p-[20px] flex items-center flex-col rounded-[10px]">
          <span className="p-[10px] text-[18px] rounded-[50%] text-[#f6cc0d] bg-[#f6cb0d38]">
            <GiCarWheel />
          </span>
          <h1 className="mx-[0] my-[15px] font-semibold text-[18px]">
            Tire Wear
          </h1>
          <div className="w-[100px] h-[100px]">
            <CircularProgressbar
              value={60}
              text={`60%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: "#f6cc0d",
                textColor: "#f6cc0d",
              })}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default DashboardNavLinks;
