export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'Car ID',
      description: 'Unique identifier for the car',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Car Type',
      description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'fuel_capacity',
      type: 'string',
      title: 'Fuel Capacity',
      description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
    },
    {
      name: 'transmission',
      type: 'string',
      title: 'Transmission',
      description: 'Type of transmission (e.g., Manual, Automatic)',
    },
    {
      name: 'seating_capacity',
      type: 'string',
      title: 'Seating Capacity',
      description: 'Number of seats (e.g., 2 People, 4 seats)',
    },
    {
      name: 'price_per_day',
      type: 'string',
      title: 'Price Per Day',
      description: 'Rental price per day',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., popular, recommended)',
    },
    {
      name: 'image_url',
      type: 'url',
      title: 'Image URL',
      description: 'URL of the car image',
      validation: (Rule:any) => Rule.uri({ allowRelative: false }),
    },
  ],
};
