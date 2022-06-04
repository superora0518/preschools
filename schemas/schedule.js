export default {
  name: 'schedule',
  title: 'Schedule a Tour',
  type: 'document',
  fields: [
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
    },
    {
      name: 'scheduleInfo',
      title: 'Schedule Information',
      type: 'text',
    },
  ],
}
