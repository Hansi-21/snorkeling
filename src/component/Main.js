import React from "react";
import caption from "../assert/caption.jpg";
import mainphoto from "../assert/main.jpg";
import about1 from "../assert/about2.jpg";
import about2 from "../assert/about1.jpg";
import "./Header";

function Main() {
  return (

    <div>
      <div id="home" class="bg-white dark:bg-gray-800 flex relative z-20 items-center">
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


      {/* Start About Section */}
      <div id="about-section" class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-1xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
              About
            </span>
          </h2>
          <p class="text-md mt-4 ">
            Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.
          </p>
          <br />
          <h4 class="font-extrabold">What to expect?</h4>
          <br />
          <p>You can get a feel of nature and see a beauty of deep sea.Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.</p>

          <div class="lg:mt-0 lg:flex-shrink-0 l">
            <div class="mt-12 rounded-md shadow">
              <a href="https://www.tripadvisor.com/AttractionProductReview-g1407334-d19985332-Snorkeling_Turtles_in_Mirissa-Mirissa_Southern_Province.html">
                <button style={{ backgroundColor: "#035397" }} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  More Information
                </button>
              </a>
            </div>
          </div>
        </div>


        <div class="flex items-center gap-8 p-8 lg:p-24">
          <img src={caption} class="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src={about1} class="rounded-lg mb-8" alt="Tree" />
            <img src={about2} class="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
      {/* End About Section  */}

      {/* Start Booking Section */}
      <div id="booking-section" class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-1xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
              Book Now
            </span>
          </h2>
          <p class="text-md mt-4 ">
            Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.
          </p>
          <h3 class="font-bold" >Inclusions</h3>
          <p class="text-md mt-4 ">
            Guide
          </p>

          <br />
          <h3 class="font-bold" >Duration</h3>
          <p class="text-md mt-4 ">
            1 hour
          </p>
          <br />
          <h3 class="font-bold" >Departure details</h3>
          <p class="text-md mt-4 ">
            Little Angels, Madurudoowa Road, Bandaramulla, Mirissa 81000, Sri Lanka
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0 l ">
            <div class="mt-12 rounded-md shadow">
              <a href="https://www.tripadvisor.com/AttractionProductReview-g1407334-d19985332-Snorkeling_Turtles_in_Mirissa-Mirissa_Southern_Province.html">
                <button style={{ backgroundColor: "#035397" }} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Check Avalability
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 lg:p-24">
          <img src={about1} class="rounded-lg mb-8" alt="Tree" />

        </div>

      </div>

      {/* End Booking Section  */}

      {/* Start Review section */}
      <div id="reviews-section" class="bg-white dark:bg-gray-800 overflow-hidden relative  lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-1xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
              Reviews
            </span>
          </h2>
          <p class="text-md mt-4 ">
            Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. Use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface.
          </p>
        </div>
        <div class="container flex flex-col mx-auto w-full items-center justify-center">
          <ul class="flex flex-col">
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">
                    Channa G
                  </div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    Dec 2020 • Family
                    We were also lucky to be able to release some turtles on the beach.this was such a magic experience and totally made our trip.
                  </div>
                </div>
              </div>
            </li>
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">

                    Bella Shultz
                  </div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    A very fun and enjoyable experience
                    Dec 2019 • Friends
                    It was such a marvellous experience to see the sea life as it is.<br /> I was very happy with the service since they were very customer friendly and always willing to help if you needed anything. Overall a very satisfying experience and a day well spent at the sea :)
                  </div>
                </div>
              </div>
            </li>
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <img alt="profil" src="/images/person/3.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">
                    Chloedardicool
                  </div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    Best Snorkeling!
                    Mar 2020 • Friends
                    Amazing!Turtles and fish and coral. So beautiful! We were helped, <br />it was an perfect experience I fully recommend. Thank you for everything see you next time. We will come back for sure!
                  </div>
                </div>
              </div>
            </li>
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                  <div class="font-medium dark:text-white">

                    Carlos M
                  </div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    Amazing turtle watching experience
                    Feb 2020
                    Weranga provided snorkelling kits and all the necessary indications to ensure we would find sea turtles,<br /> once in the water it took us just a few minutes to find several large turtles and lots of fish and corals. Fantastic experience!
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="lg:mt-0 lg:flex-shrink-0 l">
            <div class="mt-12 inline-flex rounded-md shadow">
              <a href="https://www.tripadvisor.com/AttractionProductReview-g1407334-d19985332-Snorkeling_Turtles_in_Mirissa-Mirissa_Southern_Province.html">
                <button style={{ backgroundColor: "#035397" }} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  More Reviews
                </button>
              </a>
            </div>
          </div>
        </div>

        <br />

      </div>
      {/* End Review section */}


    </div>
  );
}

export default Main;
