import { defineField } from 'sanity';

export const category = defineField({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Gender',
    }),
  ],
});