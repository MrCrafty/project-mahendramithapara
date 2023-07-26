import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Mahendra Mithapara",
};

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <h1 className="text-5xl">Site Under Construction</h1>
      <p className="text-2xl mt-10 flex items-center">
        You can visit my venture website
        <BsArrowBarRight className="mr-5" />
        <a
          href={"harshartacademy.com"}
          className=" font-semibold text-4xl text-transparent transition-all bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text"
        >
          HARSH ART ACADEMY
        </a>
      </p>
    </div>
  );
};

export default Home;
