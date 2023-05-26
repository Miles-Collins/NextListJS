import { deleteCar, getCar, getCarPaths } from "@/lib/cars.js";
import Link from "next/link";

export async function getStaticPaths() {
  return await getCarPaths();
}

export async function getStaticProps({ params }) {
  const car = await getCar(params.id);
  return {
    props: {
      car,
    },
  };
}

async function DeleteCar(id) {
  const res = await deleteCar(id);
  console.log("DELETED CAR", res);
}

export default function CarPage({ car }) {
  console.log("[CAR]", car);
  return (
    <div className="container m-auto">
      <Link href={"/cars"}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
          Go Back
        </button>
      </Link>
      <button
        onClick={() => DeleteCar(car?.id)}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5 mx-2"
      >
        Delete Car
      </button>
      <div className="grid grid-col-2 mt-5 rounded shadow">
        <img
          className="rounded h-100 w-96 shadow object-cover"
          src={car?.imgUrl}
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 bg-slate-300 text-black mt-5 p-5 rounded">
        <h1>
          Vehicle: {car?.year} {car?.make} {car?.model}
        </h1>
        <h1>Price: ${car?.price}</h1>
      </div>
      <div className="grid grid-cols-2 my-5">
        <p>Description: {car?.description}</p>
      </div>
    </div>
  );
}

// export default function CarPage() {
//   return <h1>Yo!</h1>;
// }
