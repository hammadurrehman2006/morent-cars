import sanityClient from './wClient';
import { Car } from '../types/car';

export const saveCarsToSanity = async (cars: Car[]): Promise<void> => {
  try {
    const promises = cars.map((car) => {
      return sanityClient.createIfNotExists({
        _type: 'car',
        _id: `car-${car.id}`,
        id: car.id,
        name: car.name,
        type: car.type,
        fuel_capacity: car.fuel_capacity,
        transmission: car.transmission,
        seating_capacity: car.seating_capacity,
        price_per_day: car.price_per_day,
        tags: car.tags,
        image_url: car.image_url
      });
    });

    await Promise.all(promises); // Ensure all data is saved
    console.log('Cars successfully saved to Sanity!');
  } catch (error) {
    console.error('Error saving cars to Sanity:', error);
  }
};

