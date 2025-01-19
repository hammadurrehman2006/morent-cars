export interface Car{
    id: string; // Unique identifier from the API
    name: string;
    type: string;
    fuel_capacity: string;
    transmission: string;
    seating_capacity: string;
    price_per_day: string;
    image_url: string;
    tags?: string[]; // Optional field for tags
  }