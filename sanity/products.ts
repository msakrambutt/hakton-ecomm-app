import { defineField, defineType } from 'sanity';


export const products = defineType({
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Product Slug',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
    }),
    // defineField(
    //   {
    //     name: 'size',
    //     title: 'Product size',
    //     type: 'array',
    //     of: [{type: 'string'}],
    //     options: {
    //       list: [
    //         {title: 'Extra Large', value: 'XL'},
    //         {title: 'Large', value: 'L'}
    //       ]
    //     }
    //   }
    // ),
    defineField({
      name: 'genderCategory',
      title: 'Product Gender Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    }),
  ],
});