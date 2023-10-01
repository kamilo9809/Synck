"use client";
import React from "react";
import Dropdown from "./dropdown";
import Image from "next/image";


  export default function Navbar() {
 
    return (
      <nav className="bg-color-gris opacity-98">
    <div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
      <div className="relative flex navbarHeight items-center justify-between">

        <div className="flex flex-1 items-center sm:items-stretch sm:justify-around">

          {/*aca vamos a poner la imagen */}
          <div className="flex flex-shrink-0 items-center">
            <Image className="h-8 w-auto" src="/images/Group.svg" alt="Your Company" width={190} height={40}/>
          </div>

          {/*aca  van a ir las opciones del navbar */}
          <div className="hidden sm:ml-2 sm:block">
            <div className="flex space-x-7 ">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Community</a>
              <Dropdown />
              <a href="#" className="configButtonLogin text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login/Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/*este es la vista del  movil*/}
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Community</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <Dropdown />
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login/Register</a>
      </div>
    </div>
  </nav>

    );
  }
