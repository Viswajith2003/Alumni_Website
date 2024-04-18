import React from "react";

export default function gallery() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl my-5 text-center">Gallery</h1>
      <div className="grid grid-cols-2 w-full">
        <div className="m-4">
          <div className=" w-auto h-64">
            <img
              src="/images/gallary8.webp"
              alt="image"
              className="w-[930px] h-64"
            />
          </div>
          <div className="flex gap-4">
            <div className=" w-full h-60 mt-4">
              <img
                src="/images/gallary2.jpg"
                alt="image"
                className="w-[930px]"
              />
            </div>
            <div className=" w-full mt-4">
              <img
                src="/images/gallary4.webp"
                alt="image"
                className="w-[930px]"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-4">
            <div className=" w-full h-60 my-4">
              <img
                src="/images/gallary10.jpg"
                alt="image"
                className="w-[930px]"
              />
            </div>
            <div className=" w-full my-4">
              <img
                src="/images/gallary6.webp"
                alt="image"
                className="w-[930px]"
              />
            </div>
          </div>
          <div className=" w-full h-64">
            <img
              src="/images/gallary5.webp"
              alt="image"
              className="w-[930px] h-64"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 ml-5 px-2">
        <div className=" w-full h-72 my-4">
          <img
            src="/images/gallary7.webp"
            alt="image"
            className="w-[930px] h-72"
          />
        </div>
        <div className=" w-full my-4">
          <img
            src="/images/gallary1.avif"
            alt="image"
            className="w-[930px] h-72"
          />
        </div>
        <div className=" w-full my-4">
          <img
            src="/images/gallary9.webp"
            alt="image"
            className="w-[930px] h-72"
          />
        </div>
      </div>
    </div>
  );
}
