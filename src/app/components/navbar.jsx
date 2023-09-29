"use client";
import React from "react";
import Dropdown from "./dropdown";


  export default function Navbar() {
 
    return (
      <nav class="bg-color-gris ">
    <div class="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <div class="flex flex-1 items-center sm:items-stretch sm:justify-around">

          {/*aca vamos a poner la imagen */}
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="../images/Group.svg" alt="Your Company"/>
          </div>

          {/*aca  van a ir las opciones del navbar */}
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              <Dropdown />
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login/Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/*este es la vista del  movil*/}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <Dropdown />
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login/Register</a>
      </div>
    </div>
  </nav>

    );
  }
