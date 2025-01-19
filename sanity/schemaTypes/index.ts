import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars],
}
