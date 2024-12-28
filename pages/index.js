import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars, FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

export default function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Head>
        <title>VARMA</title>
        <meta name="description" content="Discover exquisite watches crafted to perfection." />
        <link rel="icon" href="/dental.png" />
      </Head>

      <header className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl text-[#1E4753] font-bold" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>varma</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-[#1E4753] font-bold">ABOUT</a></li>
              <li><a href="#collection" className="text-[#1E4753] font-bold">SERVICES</a></li>
              <li><a href="#about" className="text-[#1E4753] font-bold">WARRANTY</a></li>
              <li><a href="#contact" className="text-[#1E4753] font-bold">NEW PATIENT</a></li>
              <li><a href="#contact" className="p-3 bg-[#1E4753] font-bold text-white " style={{ fontFamily: 'Times, "Times New Roman", serif' }}>BOOK ONLINE</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative h-screen text-white flex items-center justify-center">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute left-40">
            <h2 className="text-3xl">Trusted Denver Tech Center Dentists</h2>
            <p className="mt-4 text-7xl" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>Exceptional care<br></br>
              for all ages</p>
            <div className="flex items-center mt-6">
              <button className="bg-yellow-700 text-white px-8 py-3 text-xl">BOOK NOW</button>

            </div>
            <h3 className="mt-2">037-632-11</h3>
          </div>
        </section>

        <section id="collection" className="py-16 bg-[#F4F6F3]">
          <div className="container mx-auto text-center">
            <h3 className="text-5xl mb-12 text-[#1E4753]" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>Comprehensive care, one convenient location</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto">
                <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="dentist1.jpg" />
                <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div class="absolute w-full flex place-content-center">
                    <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">General</p>
                  </div>
                  <div class="absolute w-full flex place-content-center mt-20">
                    <p class="font-sans text-center w-4/5 text-white mt-5">Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.</p>
                  </div>
                  <button class="absolute left-10 right-10 bottom-4 border border-yellow-700 hover:bg-yellow-700 text-white px-4 py-2">ABOUT GENERAL DENTISTRY</button>
                </div>
              </div>

              <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto">
                <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="dentist2.jpg" />
                <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div class="absolute w-full flex place-content-center">
                    <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Cosmetic</p>
                  </div>
                  <div class="absolute w-full flex place-content-center mt-20">
                    <p class="font-sans text-center w-4/5 text-white mt-5">Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
                  </div>
                  <button class="absolute left-10 right-10 bottom-4 border border-yellow-700 hover:bg-yellow-700 text-white  px-4 py-2">ABOUT COSMETIC DENTISTRY</button>
                </div>
              </div>

              <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto">
                <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="dentist3.jpg" />
                <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div class="absolute w-full flex place-content-center">
                    <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Surgical</p>
                  </div>
                  <div class="absolute w-full flex place-content-center mt-20">
                    <p class="font-sans text-center w-4/5 text-white mt-5">We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
                  </div>
                  <button class="absolute left-10 right-10 bottom-4 border border-yellow-700 hover:bg-yellow-700 text-white px-4 py-2">ABOUT SURGICAL DENTISTRY</button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="collection" className="py-16 bg-[#1E4753]">

          <div class="min-h-screen  text-gray-900 flex justify-center">
            <div class="max-w-screen-xl m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
              <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                  <h1 class="text-3xl xl:text-5xl text-white">
                    Book appointement
                  </h1>
                  <div class="w-full flex-1 mt-8">


                    <div class="mx-auto max-w-xs">
                      <input
                        class="w-full px-8 py-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email" placeholder="Select treatement" />
                      <input
                        class="w-full px-8 py-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Select your Doctor" />
                      <button
                        class="mt-5 tracking-wide bg-yellow-700 text-gray-100 w-1/2 py-4 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                        <span class="ml-3">
                          NEXT STEP
                        </span>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/dental.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-5xl mb-6 text-[#1E4753]" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>Visit Us</h3>
            <p className=" max-w-2xl mx-auto text-[#1E4753]">
            We’re conveniently located in the Denver Tech Center area. Find us on the 4th floor of the Triad Office Park building. Plenty of free parking available.
            </p>
          </div>
          

<div class="grid grid-cols-2 md:grid-cols-2 gap-4 mt-14 m-32">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-1/2 rounded-lg" src="dentist4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="dentist5.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="dentist6.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="dentist7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="dentist8.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="dentist3.jpg" alt=""/>
        </div>
    </div>
   
</div>

        </section>

        <section id="contact" className="py-16 bg-[#1E4753] text-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl mb-6 " style={{ fontFamily: 'Times, "Times New Roman", serif' }}>Let us be your consaltant</h3>
            <p className="mb-4">Have questions? We'd love to hear from you.</p>
            <form className="max-w-md mx-auto">
              <input type="text" placeholder="Your Name" className="w-full p-3 mb-4" />
              <input type="email" placeholder="Your Email" className="w-full p-3 mb-4" />
              <textarea placeholder="Your Message" className="w-full p-3 mb-4"></textarea>
              <button type="submit" className="bg-yellow-700 hover:bg-yellow-700 px-6 py-3">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#1E4753] text-white py-4 text-center">
        <p>&copy; 2024 Luxury Timepieces. All rights reserved.</p>
      </footer>
    </div>
  );
}
