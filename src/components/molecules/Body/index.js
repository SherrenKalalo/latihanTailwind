import React from "react";
import BodyContainers from "../../atoms/BodyContainers";

function Body() {
  return (
    <div className="bg-gray-900 min-h-screen grid content-start tracking-wide lg:pt-24 p-4">
        <section className="lg:pt-5">
            <h1 className="pt-0  text-3xl font-semibold text-center text-gray-200">Tailwind CSS Cheat Sheet</h1>
            <p className="max-w-6xl px-4 mx-auto mt-4 text-base text-center text-gray-400 md:text-lg">Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!</p>
            <p className="max-w-6xl px4 mx-auto mt-4 mb-10 text-base italic text-center text-gray-400 md:text-lg">"Never memorize something that you can look up." - Albert Einstein</p>
        </section>
        <BodyContainers/>
    </div>
  );
}

export default Body;
