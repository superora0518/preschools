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
      title: 'Location*',
      type: 'reference',
      to: {type: 'location'},
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image*',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description*',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'ages',
      type: 'object',
      title: 'Ages',
      fields: [
        {
          name: 'fromAge',
          type: 'number',
          title: 'From Age*',
          validation: Rule => Rule.custom((duration, context) => {
            const isShortTalk = duration && duration > 0 && duration <= 100
            if (!isShortTalk) {
              return 'Only Enter number from 1 to 100'
            }

            return true
          })
        },
        {
          name: 'toAge',
          type: 'number',
          title: 'To Age*',
          validation: Rule => Rule.custom((duration, context) => {
            const isShortTalk = duration && duration > 0 && duration <= 100
            if (!isShortTalk) {
              return 'Only Enter number from 1 to 100'
            }

            return true
          })
        }
      ],
    },
    {
      name: 'serves',
      title: 'Serves*',
      type: 'array',
      of: [{type: 'reference', to: {type: 'serve'}}],
      validation: Rule => Rule.required()
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
