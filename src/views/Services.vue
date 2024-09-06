<template>
    <div>
      <h1 class="text-4xl font-bold mb-6">Our Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md">
          <img :src="service.image" :alt="service.name" class="w-full h-48 object-cover rounded-md mb-4">
          <h2 class="text-2xl font-semibold mb-2">{{ service.name }}</h2>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        services: [
          {
            id: 1,
            name: 'Oil Change',
            description: 'Regular oil changes to keep your engine running smoothly.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTE-Zmf44X4CE4SvQKAZtfx5BBZVq6wNVJQ&s?height=200&width=300',
          },
          {
            id: 2,
            name: 'Brake Service',
            description: 'Ensure your safety with our professional brake service.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKLdgt6snj7LtpxmP_5Lvi0l0iuePIvhOyA&s?height=200&width=300',
          },
          {
            id: 3,
            name: 'Tire Replacement',
            description: 'Get new tires installed by our experienced technicians.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBB9X8Y-_-HaL0sb5Qev9iYP0ZfF69ZywTQ&s?height=200&width=300',
          },
          {
            id: 4,
            name: 'Engine Diagnostics',
            description: 'Identify and fix engine issues with our advanced diagnostic tools.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY-cH6K80xictDHDpHGttmC9NtT-NaRCyCQ&s?height=200&width=300',
          },
          {
            id: 5,
            name: 'Suspension Repair',
            description: 'Improve your ride comfort with our suspension repair service.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3XtqkDaxGKLqW6inIdgrkbnm5etyF_ZgKQ&s?height=200&width=300',
          },
          {
            id: 6,
            name: 'AC Service',
            description: 'Stay cool with our professional AC maintenance and repair.',
            image: 'https://www.hogantire.com/wp-content/uploads/2024/01/Air-Conditioning-.jpg?height=200&width=300',
          },
        ],
      }
    },
  }
  </script>