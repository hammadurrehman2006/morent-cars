import { Car } from '../types/car'; // Assuming the Car type is defined elsewhere in your project
export const fetchCars = async (): Promise<Car[]> => {
  try {
    const response = await fetch('https://sanity-nextjs-application.vercel.app/api/hackathon/template7'); // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`Error fetching cars: ${response.statusText}`);
    }

    const data: Car[] = await response.json(); // Ensure the response matches the `Car` type
    return data;
  } catch (error) {
    console.error('Error fetching car data:', error);
    return [];
  }
};