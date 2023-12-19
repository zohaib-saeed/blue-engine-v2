/* eslint-disable no-unused-vars */
"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Logo from "../assets/images/Logo.png";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <div onClick={() => setOpen(true)} className="w-6 float-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#002c12] bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only text-black">
                            Close panel
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </Transition.Child>
                    <div className=" flex h-full flex-col   overflow-y-scroll bg-[#fff] py-3 shadow-xl">
                      <img src={Logo} className="w-[76px] ml-6 pb-10" alt="" />

                      <ul className="flex flex-col text-[#000000] font-NunitoRegular text-[16px] ml-6 ">
                        <a href="#hero">Home</a>
                        <a href="#features" className="mt-1">
                          Features
                        </a>
                        <a href="#pricing" className="mt-1">
                          Pricing
                        </a>
                        <a href="#faq" className="mt-1">
                          FAQ
                        </a>
                        <a href="#resource" className="mt-1">
                          Resource
                        </a>
                        <a href="#support" className="mt-1">
                          Support
                        </a>
                      </ul>
                      <div className="w-[90%] mx-auto ">
                        <button className="bg-[#238CFF] my-5 w-full font-NunitoRegular text-[16px] text-[#ffffff] py-2 font-bold rounded-[50px]">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default MobileDrawer;
