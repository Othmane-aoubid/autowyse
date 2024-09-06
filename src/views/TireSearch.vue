<template>
    <div>
      <h1 class="text-4xl font-bold mb-6">Tire Search</h1>
      <div class="mb-8">
        <form @submit.prevent="searchTires" class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label for="width" class="block mb-2">Width</label>
            <input v-model="search.width" type="number" id="width" placeholder="e.g. 205" class="w-full p-2 border rounded">
          </div>
          <div>
            <label for="aspect" class="block mb-2">Aspect Ratio</label>
            <input v-model="search.aspect" type="number" id="aspect" placeholder="e.g. 55" class="w-full p-2 border rounded">
          </div>
          <div>
            <label for="diameter" class="block mb-2">Diameter</label>
            <input v-model="search.diameter" type="number" id="diameter" placeholder="e.g. 16" class="w-full p-2 border rounded">
          </div>
          <div>
            <label for="brand" class="block mb-2">Brand</label>
            <input v-model="search.brand" type="text" id="brand" placeholder="e.g. Michelin" class="w-full p-2 border rounded">
          </div>
          <div class="md:col-span-4">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Search Tires</button>
          </div>
        </form>
      </div>
      <div v-if="searchResults.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="tire in searchResults" :key="tire.id" class="bg-white p-6 rounded-lg shadow-md">
          <img :src="tire.image" :alt="tire.name" class="w-full h-48 object-cover rounded-md mb-4">
          <h2 class="text-2xl font-semibold mb-2">{{ tire.name }}</h2>
          <p class="text-gray-600 mb-2">Size: {{ tire.size }}</p>
          <p class="text-gray-600 mb-2">Brand: {{ tire.brand }}</p>
          <p class="text-gray-600">Price: ${{ tire.price }}</p>
        </div>
      </div>
      <p v-else-if="searched" class="text-xl text-center">No results found. Please try a different search.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TireSearch',
    data() {
      return {
        search: {
          width: '',
          aspect: '',
          diameter: '',
          brand: '',
        },
        searchResults: [],
        searched: false,
      }
    },
    methods: {
      searchTires() {
        // Simulated search results
        this.searchResults = [
          {
            id: 1,
            name: 'EcoTire Pro',
            size: '205/55R16',
            brand: 'Michelin',
            price: 120,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumstQMcY75IzF1uaaIXws9rJyMC8skyBrBA&s?height=200&width=300',
          },
          {
            id: 2,
            name: 'SportMax Ultra',
            size: '225/45R17',
            brand: 'Bridgestone',
            price: 150,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumstQMcY75IzF1uaaIXws9rJyMC8skyBrBA&s?height=200&width=300',
          },
          {
            id: 3,
            name: 'AllSeason Grip',
            size: '215/65R16',
            brand: 'Goodyear',
            price: 135,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumstQMcY75IzF1uaaIXws9rJyMC8skyBrBA&s?height=200&width=300',
          },
        ]
        this.searched = true
      },
    },
  }
  </script>