export default {
  name: 'age',
  title: 'Age',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'fromAge',
      type: 'object',
      title: 'From Age',
      fields:[
        {
          name: 'fromAgeUnit',
          type: 'string',
          title: 'Age Unit',
          options: {
            list: [{title: "Weeks", value: "week"}, {title: "Months", value: "month"}, {title: "Years", value: "year"}],
          }
        },
        {
          name: 'fromAgeValue',
          type: 'number',
          title: 'From Age Value'
        },
      ]
    },
    {
      name: 'toAge',
      type: 'object',
      title: 'To Age',
      fields:[
        {
          name: 'toAgeUnit',
          type: 'string',
          title: 'Age Unit',
          options: {
            list: [{title: "Weeks", value: "week"}, {title: "Months", value: "month"}, {title: "Years", value: "year"}],
          }
        },
        {
          name: 'toAgeValue',
          type: 'number',
          title: 'To Age Value'
        },
      ]
    },
  ],
}
