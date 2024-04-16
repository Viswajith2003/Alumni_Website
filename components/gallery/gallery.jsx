import React from "react";

export default function gallery() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl my-5 text-center">Gallery</h1>
      <div className="grid grid-cols-2 w-full">
        <div className="m-4">
          <div className="bg-[#2f46f1] w-auto h-64">image1</div>
          <div className="flex gap-4">
            <div className="bg-[#e62222] w-full h-60 mt-4">image2</div>
            <div className="bg-[#84f92b] w-full mt-4">image3</div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-4">
            <div className="bg-[#e62222] w-full h-60 my-4">image4</div>
            <div className="bg-[#84f92b] w-full my-4">image5</div>
          </div>
          <div className="bg-[#2f46f1] w-full h-64">image6</div>
        </div>
      </div>
      <div className="flex gap-4 ml-5 px-2">
        <div className="bg-[#e62222] w-full h-72 my-4">image7</div>
        <div className="bg-[#84f92b] w-full my-4">image8</div>
        <div className="bg-[#84f92b] w-full my-4">image9</div>
      </div>
    </div>
  );
}
