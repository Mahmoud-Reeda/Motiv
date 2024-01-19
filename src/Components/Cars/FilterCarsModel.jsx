import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FaCaretDown } from "react-icons/fa";

function classNamesModel(...classes) {
  return classes.filter(Boolean).join(" ");
}
const FilterCarsModel = ({ cars, filterCars }) => {
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <Listbox value={selectedModel} onChange={setSelectedModel}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="min-w-[150px] !rounded-[50px] relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selectedModel || "Select car name"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <FaCaretDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Array.from(new Set(cars?.map((car) => car.car))).map(
                  (car, idx) => {
                    return (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          classNamesModel(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={car}
                        onClick={() => filterCars(car)}
                      >
                        {({ selectedModel, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNamesModel(
                                  selectedModel
                                    ? "font-semibold"
                                    : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {car}
                              </span>
                            </div>

                            {selectedModel ? (
                              <span
                                className={classNamesModel(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    );
                  }
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default FilterCarsModel;
