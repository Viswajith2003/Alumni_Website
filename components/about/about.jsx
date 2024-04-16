import React from "react";

export default function About() {
  return (
    <div className="container mx-auto pt-12">
      <h1 className="font-bold text-5xl mb-10 text-center">About Us</h1>
      <div className="grid grid-cols-1 p-2">
        <div className="flex">
          <div className=" p-3  w-3/4 hover:scale-95">
            <img src="/images/about.png" alt="About Us" className="w-96 h-96" />
          </div>

          <div className=" p-5 pt-20 col-span-2">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-xl">
              Our mission is to create a robust Alumni Management System that
              fosters connections and engagement among alumni, students, and the
              institution. We aim to provide a platform for lifelong learning,
              networking, and professional development opportunities.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="p-5 pt-16 h-80">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-xl">
              Our vision is to build a vibrant and inclusive alumni community
              that contributes to the growth and success of both individual
              members and the alma mater. We envision a dynamic platform that
              facilitates meaningful interactions, knowledge sharing, and
              collaboration among alumni across generations and geographical
              locations.
            </p>
          </div>

          <div className="hover:scale-95  w-auto">
            <img
              src="/images/about2.png"
              alt="About Us"
              className="w-[930px] h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function About() {
//   return (
//     <div className="container mx-auto pt-12">
//       <h1 className="font-bold text-5xl mb-10 text-center">About Us</h1>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-2">
//         {/* Left Top: about.png and Our Mission */}
//         <div className="flex flex-col justify-start items-start md:items-end md:justify-start md:flex-row md:col-span-1">
//           <div className="p-3 w-full md:w-3/4">
//             <img
//               src="/images/about.png"
//               alt="About Us"
//               className="w-full h-auto"
//             />
//           </div>
//           <div className="p-5 md:pt-20 w-full md:w-1/2">
//             <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
//             <p className="text-gray-700 text-xl">
//               Our mission is to create a robust Alumni Management System that
//               fosters connections and engagement among alumni, students, and the
//               institution. We aim to provide a platform for lifelong learning,
//               networking, and professional development opportunities.
//             </p>
//           </div>
//         </div>
//         {/* Right Bottom: about2.png and Our Vision */}
//         <div className="flex flex-col justify-end items-end md:items-start md:justify-end md:flex-row md:col-span-1">
//           <div className="p-5 pt-16 md:pt-0 w-full md:w-1/2">
//             <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
//             <p className="text-gray-700 text-xl">
//               Our vision is to build a vibrant and inclusive alumni community
//               that contributes to the growth and success of both individual
//               members and the alma mater. We envision a dynamic platform that
//               facilitates meaningful interactions, knowledge sharing, and
//               collaboration among alumni across generations and geographical
//               locations.
//             </p>
//           </div>
//           <div className="p-3 w-full md:w-3/4">
//             <img
//               src="/images/about2.png"
//               alt="About Us"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
