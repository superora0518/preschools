import TimeToSecondsField from 'sanity-plugin-time-seconds'
export default {
  name: 'tours',
  title: 'Tours',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: {type: 'location'}
    },
    {
      name: 'mainImageForLocation',
      title: 'Main Image*',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'classifies',
      title: 'Classifies*',
      type: 'array',
      of: [{type: 'reference', to: {type: 'classify'}}]
    },
    {
      name: 'description',
      title: 'Description*',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'ages',
      title: 'Ages',
      type: 'reference',
      to: {type: 'age'}
    },
    {
      name: 'serves',
      title: 'Serves',
      type: 'array',
      of: [{type: 'reference', to: {type: 'serve'}}]
    },
    {
      name: 'hours',
      type: 'object',
      title: 'Hours',
      fields: [
        {
          name: 'startHour',
          type: 'number',
          title: 'Start Hour*',
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'endHour',
          type: 'number',
          title: 'End Hour*',
          inputComponent: TimeToSecondsField,
          options: {
            placeholder: "Please enter a value in 00:00 format"
          },
          validation: Rule => Rule.required()
        }
      ],
    },
    {
      name: 'schoolDayHours',
      type: 'object',
      title: 'School Day`s Hours',
      fields: [
        {
          name: 'startHour',
          type: 'number',
          title: 'Start Hour'
        },
        {
          name: 'toHour',
          type: 'number',
          title: 'To Hour'
        }
      ],
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        {
          name: 'street',
          type: 'string',
          title: 'Street'
        },
        {
          name: 'city',
          type: 'string',
          title: 'City*',
          validation: Rule => Rule.required()
        },
        {
          name: 'state',
          type: 'string',
          title: 'State'
        },
        {
          name: 'postalCode',
          type: 'string',
          title: 'Postal Code*',
          validation: Rule => Rule.required()
        }
      ],
    },
    {
      name: 'phone',
      title: 'Phone*',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
