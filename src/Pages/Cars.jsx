import { useGetCarsQuery } from "../Store/carSlice";
import FilterCarsModel from "../Components/Cars/FilterCarsModel.jsx";
import AvailCars from "../Components/Cars/AvailCars.jsx";
import { RxDashboard } from "react-icons/rx";
import { LuSettings2 } from "react-icons/lu";
import CarsList from "../Components/Cars/CarsList.jsx";
import { useState } from "react";
import ErrorAlert from "../Components/ErrorAlert.jsx";
const Cars = () => {
  const {
    data: cars,
    isError: isErrorCars,
    error: errorCars,
  } = useGetCarsQuery();

  const [filterCarModel, setFilterCarModel] = useState(null);

  const filteredCars = cars?.filter(
    (car) => car.car.toLowerCase() === filterCarModel?.toLowerCase()
  );

  return (
    <>
      {isErrorCars ? (
        <ErrorAlert isError={isErrorCars} error={errorCars} />
      ) : null}
      <div className={`container  w-[90%] m-auto `}>
        <h1 className=" text-[#242731] text-3xl font-bold ">Booking</h1>
        <div className="flex justify-between items-center mt-5">
          <div className="inline-flex items-center gap-2.5 flex-wrap">
            <AvailCars />
            <FilterCarsModel cars={cars} filterCars={setFilterCarModel} />
          </div>
          <div className="flex justify-center items-center flex-wrap gap-2.5 text-[#242731]">
            <div>
              <RxDashboard className="p-1 bg-[#A162F7] text-3xl rounded-[30px] bg-[#fff] cursor-pointer" />
            </div>

            <div className={`active`}>
              <LuSettings2 className="p-1 bg-[#A162F7] text-3xl rounded-[30px] text-[#fff] cursor-pointer" />
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}

        <CarsList cars={filterCarModel !== null ? filteredCars : cars} />
      </div>
    </>
  );
};

export default Cars;
