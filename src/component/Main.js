import React from "react";
import snorkeling from "../assert/snorkeling.jpg";
import mainphoto from "../assert/main.jpg";


function Main() {
  return (

    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center">
      <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
        <div class="flex flex-col">
          <h1 class="font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
            Life looks better underwater
          </h1>
          <h2 class="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
            Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.
          </h2>

        </div>
        <br />
        <div class="block w-full mx-auto mt-6 md:mt-0 relative">
          <img src={mainphoto} width="100%" />
        </div>
      </div>
    </div>


  );
}

export default Main;
