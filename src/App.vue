<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold">Car Mechanic Shop</router-link>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-blue-200">Home</router-link>
          <router-link to="/services" class="hover:text-blue-200">Services</router-link>
          <router-link to="/tire-search" class="hover:text-blue-200">Tire Search</router-link>
          <router-link to="/about" class="hover:text-blue-200">About</router-link>
          <router-link to="/contact" class="hover:text-blue-200">Contact</router-link>
        </div>
      </div>
    </nav>

    <main class="container mx-auto mt-8 px-4">
      <router-view></router-view>
    </main>

    <footer class="bg-blue-600 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        &copy; 2023 Car Mechanic Shop. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>