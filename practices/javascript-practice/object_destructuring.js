const dreamHoliday = {
  destination: 'Italy',
  duration: '2 weeks',
  activities: ['sightseeing', 'hiking', 'history tours']
} 

const { destination, duration, activities } = dreamHoliday

console.log(`My dream holiday is to ${destination} for ${duration}. I want to do activities like ${activities.join(', ')}.`)
