"use client";
import React from "react";

import AuroraView from "./Text";


const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// const CheckIcon = ({ className }: { className?: string }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5 13l4 4L19 7"
//     />
//   </svg>
// );

const Hero3: React.FC = () => {
  // const features = [
  //   "No credit card required",
  //   "Free 14-day trial",
  //   "Cancel anytime",
  // ];

  return (
    <div className="bg-white dark:bg-black w-full h-screen bg-[url('my-app\src\assets\ImagemFAETECSantaCruz.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black dark:text-white">
              Faetec
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Turmas
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Inscrições
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Sobre
              </a>
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Campo do Professor?
              </button>
            </div>
          </nav>
        </header>

        <main className="py-20 lg:py-32">
          <div className="text-center">
              <AuroraView></AuroraView>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Uma escola com foco na formação de carreira dos Jovens e Adultos. 
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                >
                  <CheckIcon className="h-5 w-5 text-black dark:text-white" />
                  <span>{feature}</span>
                </div>
              ))}
            </div> */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Inscrições
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-md font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Turmas
              </button>
            </div>

            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero3;
