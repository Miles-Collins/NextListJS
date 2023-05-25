export async function getCars() {
  console.log("Getting cars");
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars", {
    method: "GET",
  });
  console.log(res.json());
  return await res.json();
}

export async function getCar(carId) {
  const res = await fetch(
    `https://sandbox.codeworksacademy.com/api/cars/${carId}`,
    { method: "GET" }
  );
  const car = await res.json();
  return car;
}

export async function getCarIds() {
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");
  const cars = await res.json();
  const paths = cars.map((car) => ({
    params: { id: car.id },
  }));

  console.log("[GETTING PATHS]", paths);
  return {
    params: {
      paths,
      fallback: false,
    },
  };
}
