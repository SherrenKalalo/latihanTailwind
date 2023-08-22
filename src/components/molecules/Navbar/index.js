import React from "react";

function Navbar() {
  return (
    <div className="border-b border-gray-700 lg:fixed lg:w-full lg:top-0 lg:z-50 lg:left-0">
      <nav className="bg-gray-900 text-white">
        <div className="container p-4 mx-auto">
          <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:space-x-4">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex items-center">
                <svg className="object-cover object-left h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27">
                  <path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF">
                  </path>
                </svg>
                <p className="ml-2 text-xl text-gray-200">
                  tailwind 
                  <strong>components</strong>
                </p>
              </div>
              <h1 className="flex items-center pl-2 mt-2 text-lg border-gray-700 text-gray-300 lg:mt-0 sm:ml-2 sm:border-l sm:border-gray-400">
                Cheatsheet 
                <span className="flex items-center h-5 px-2 ml-2 text-xs font-bold text-white rounded-md bg-cyan-400"> 
                3.0.24
                </span>
              </h1>
            </div>
            <div className="relative h-10 mt-4 sm:w-96 xl:w-80 2xl:w-96 sm:mx-auto lg:m-0">
            <input className="w-full h-full pl-2 text-gray-300  border rounded-lg peer bg-gray-900 border-gray-600 focus:border-primary focus:outline-none focus:ring focus:ring-primary placeholder-gray-400 focus:ring-opacity-20" type="text" placeholder="Search" fdprocessedid="5d5i8s" />
              <span className="absolute px-2 py-1 text-xs transition-opacity duration-75 -translate-y-1/2 border rounded-lg pointer-events-none py- border-gray-700 right-2 top-1/2 peer-focus:opacity-0 text-gray-400 ">
              Ctrl k
              </span>
            </div>
            <div className="flex flex-col mt-4 space-y-3 lg:mt-0 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center sm:justify-center">
              <button className="px-4 py-2 space-x-3 text-sm transition-colors duration-300 transform border rounded-lg text-gray-200 border-gray-200 hover:bg-gray-700 focus:outline-none" fdprocessedid="hbb3r">
                Expand 
                <span className="lg:hidden xl:inline"> All</span>
              </button>
              <button className="px-4 py-2 space-x-3 text-sm transition-colors duration-300 transform border rounded-lg text-gray-200 border-gray-200 hover:bg-gray-700 focus:outline-none" fdprocessedid="u9cto7">
                Collapse 
                <span className="lg:hidden xl:inline"> All</span>
              </button>
              <button className="px-1 py-[-1] space-x-3 text-sm transition-colors duration-300 transform rounded-lg bg-cyan-400  hover:bg-cyan-600  focus:outline-none">
                <a  className="flex items-center justify-center h-10 px-4 text-sm font-medium text-center hover:text-white text-white transition-colors duration-300 transform rounded-md lg:h-10 ">
                  Back 
                  <span className="lg:hidden xl:inline">
                  &nbsp;to components
                  </span>
                </a>
              </button> 
              
              <a className="flex items-center justify-center space-x-2 transition-colors duration-500 transform text-gray-300 hover:text-primary  hover:text-primary hover:underline" href="https://github.com/tailwindcomponents/cheatsheet">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 30 30">
                  <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z">
                  </path>
                </svg>
                <span className="sm:hidden">
                  Source Code On 
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
