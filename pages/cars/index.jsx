import Link from "next/link.js";
import React from "react";

async function GetCars() {
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }
  console.log(res);
  return await res.json();
}

export async function getStaticProps() {
  console.log("Getting cars");
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }

  const cars = await res.json();
  // console.log(cars);
  return {
    props: {
      cars,
    },
  };
}

export default function CarsPage({ cars }) {
  // console.log(cars);
  // const cars = await GetCars();
  // await console.log("[CARS DATA]", carsData);
  // const cars = await Promise.all(carsData);

  return (
    <div className="carsPage">
      <div className="grid grid-cols-6 mx-5">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
          Sell Car
        </button>
      </div>
      {cars}
      <div className="grid grid-cols-4 gap-5 justify-around p-5 ">
        {cars.map((c) => (
          <div key={c.id} className="shadow-md">
            <Link href={{ pathname: `/cars/${c.id}`, query: `${c.id}` }}>
              <img
                className="object-cover hover:object-scale-down h-48 w-96 rounded"
                src={c.imgUrl}
                title={c.name}
                placeholder="Car Image"
                alt="Picture of Car."
              />
            </Link>
            <p className="text-lg">
              {c.make} {c.model}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
