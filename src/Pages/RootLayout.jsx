import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";
import iconMotiv from "../images/logo.png";
import { RxDashboard } from "react-icons/rx";
import { LiaCarSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { TbSettings } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const RootLayout = () => {
  return (
    <>
      <div className="main-page">
        <div className="side-bar ">
          <div className=" side-bar-content">
            <div className="container">
              <header className="logo">
                <img src={iconMotiv} alt="" />
                <span>Motiv.</span>
              </header>

              <div className="controlls">
                <div className="links">
                  <NavLink to="dashboard/energy">
                    <RxDashboard />
                    Dashboard
                  </NavLink>
                  <NavLink to="cars">
                    <LiaCarSolid />
                    Cars
                  </NavLink>
                </div>

                <div className="setting-logOut">
                  <button className="hover:bg-[#F5F4F6]">
                    <TbSettings />
                    Setting
                  </button>
                  <button className="hover:bg-[#F5F4F6]">
                    <TbLogout2 />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-full main-content">
          <Disclosure as="nav" className="bg-white-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <div className="relative mr-3 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-m mr-10">
                              <CiSearch />
                            </span>
                          </div>
                          <input
                            type="text"
                            name="search"
                            id="search"
                            className="block w-full rounded-md bg-[#F5F4F6] border-gray-0 py-1.5 pl-10 pr-20 text-gray-900 ring-gray-1 ring-inset ring-white-300 placeholder:text-gray-400  focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            placeholder="Search or type"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="relative rounded-full  p-1 text-gray-400 hover:bg-[#F5F4F6] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 panal_controlls">
                    <NavLink to="/dashboard/energy">
                      <Disclosure.Button>Dashboard</Disclosure.Button>
                    </NavLink>
                    <NavLink to="/cars">
                      <Disclosure.Button>cars</Disclosure.Button>
                    </NavLink>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-[#F5F4F6] min-h-[90vh]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
