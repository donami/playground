import { schema } from 'normalizr';

export const equipmentSchema = new schema.Entity('equipments', {}, { idAttribute: '_id' });

export const playgroundSchema = new schema.Entity('playgrounds', {
  equipments: [equipmentSchema],
}, { idAttribute: '_id' });
