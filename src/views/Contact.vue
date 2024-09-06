<template>
    <div>
      <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block mb-2">Name</label>
              <input v-model="form.name" type="text" id="name" required class="w-full p-2 border rounded">
            </div>
            <div>
              <label for="email" class="block mb-2">Email</label>
              <input v-model="form.email" type="email" id="email" required class="w-full p-2 border rounded">
            </div>
            <div>
              <label for="message" class="block mb-2">Message</label>
              <textarea v-model="form.message" id="message" required class="w-full p-2 border rounded" rows="4"></textarea>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Our Location</h2>
          <p class="mb-2">123 Auto Shop Lane</p>
          <p class="mb-2">Cartown, CT 12345</p>
          <p class="mb-4">United States</p>
          <h3 class="text-xl font-semibold mb-2">Hours of Operation</h3>
          <p class="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p class="mb-1">Saturday: 9:00 AM - 4:00 PM</p>
          <p class="mb-4">Sunday: Closed</p>
          <h3 class="text-xl font-semibold mb-2">Phone</h3>
          <p class="mb-1">(555) 123-4567</p>
          <h3 class="text-xl font-semibold mb-2 mt-4">Email</h3>
          <p>info@carmechanicshop.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      submitForm() {
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', this.form)
        alert('Thank you for your message. We will get back to you soon!')
        this.form = { name: '', email: '', message: '' }
      },
    },
  }
  </script>