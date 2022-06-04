import TimeToSecondsField from 'sanity-plugin-time-seconds'
export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'reference',
      to: {type: 'classify'}
    },
    {
      name: 'ages',
      title: 'Ages*',
      type: 'reference',
      to: {type: 'age'}
    },
    {
      name: 'mainImageForProgram',
      title: 'Main image*',
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
      name: 'subject',
      title: 'Subject*',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description*',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'functionalities',
      title: 'Focus on',
      type: 'array',
      of: [{type: 'reference', to: {type: 'functionality'}}]
    },
  ]
}
