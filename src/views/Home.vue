<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-gray-900 text-white">
        <div class="absolute inset-0 overflow-hidden">
          <img src="https://servicedirect.com/wp-content/uploads/2024/03/AutoRepairLeads2-Hero-ServiceDirect.png" alt="Car mechanic working" class="object-cover w-full h-full opacity-50">
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Your Trusted Auto Care Partner</h1>
          <p class="mt-6 max-w-3xl text-xl">Experience top-notch service for all your vehicle needs. From routine maintenance to complex repairs, we've got you covered.</p>
          <div class="mt-10">
            <router-link to="/services" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Explore Our Services
            </router-link>
          </div>
        </div>
      </section>
  
      <!-- What We Do Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Do</h2>
          <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="service in services" :key="service.name" class="flex flex-col items-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <component :is="service.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 class="mt-4 text-lg font-medium text-gray-900">{{ service.name }}</h3>
              <p class="mt-2 text-base text-gray-500 text-center">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Why Choose Us Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us</h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">We're committed to providing the best auto care experience possible.</p>
          </div>
          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div v-for="feature in features" :key="feature.name" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">What Our Customers Say</h2>
          <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div class="flex items-center mb-4">
                <img :src="testimonial.image" :alt="testimonial.name" class="h-12 w-12 rounded-full">
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h3>
                  <p class="text-gray-500">{{ testimonial.title }}</p>
                </div>
              </div>
              <p class="text-gray-600">{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="bg-blue-600">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Ready to experience top-notch auto care?</span>
            <span class="block text-blue-200">Book your appointment today.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <router-link to="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { WrenchIcon, ClockIcon, TruckIcon, ShieldCheckIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'
  
  const services = ref([
    { name: 'Routine Maintenance', description: 'Keep your vehicle in top condition with our comprehensive maintenance services.', icon: WrenchIcon },
    { name: 'Diagnostic Services', description: 'Accurately identify and solve issues with our state-of-the-art diagnostic tools.', icon: ClockIcon },
    { name: 'Tire Services', description: 'From rotations to replacements, we have all your tire needs covered.', icon: TruckIcon },
  ])
  
  const features = ref([
    { name: 'Expert Technicians', description: 'Our certified mechanics have years of experience working with all makes and models.', icon: UserGroupIcon },
    { name: 'Quality Parts', description: 'We use only high-quality, manufacturer-approved parts for all repairs and replacements.', icon: ShieldCheckIcon },
    { name: 'Transparent Pricing', description: 'No hidden fees or surprises. We provide upfront, honest pricing for all our services.', icon: CurrencyDollarIcon },
    { name: 'Quick Turnaround', description: 'We value your time and strive to complete all services as efficiently as possible.', icon: ClockIcon },
  ])
  
  const testimonials = ref([
    { name: 'Sarah Johnson', title: 'Local Resident', quote: 'The team at Car Mechanic Shop is fantastic! They fixed my car quickly and at a fair price.', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Mike Thompson', title: 'Business Owner', quote: 'I trust them with my entire fleet of vehicles. Their service is always top-notch.', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Emily Rodriguez', title: 'Student', quote: 'As a student on a budget, I appreciate their honest advice and affordable options.', image: '/placeholder.svg?height=100&width=100' },
  ])
  </script>