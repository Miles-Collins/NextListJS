const cars = "https://sandbox.codeworksacademy.com/api/cars/";

export async function getCars() {
  console.log("Getting cars");
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }

  const cars = await res.json();
  return {
    props: {
      cars,
    },
  };
}

export async function getCar(carId) {
  const res = await fetch(`${cars}/${carId}`, { method: "GET" });
  const car = await res.json();
  return car;
}

export async function getCarPaths() {
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");
  const cars = await res.json();
  const paths = cars.map((car) => ({
    params: { id: car.id },
  }));
  console.log("[GETTING PATHS]", paths);
  return { paths, fallback: false };
}

export async function deleteCar(carId) {
  const res = await fetch(`${cars}/${carId}`, {
    method: "DELETE",
  });
  return await res.json();
}
