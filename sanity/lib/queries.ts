export const allCars_Q = `*[_type == "car"]{
    id,
    name,
    type,
    fuel_capacity,
    transmission,
    seating_capacity,
    price_per_day,
    tags,
    image_url
  }`