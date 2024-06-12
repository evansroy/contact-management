<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">
          <router-link to="/">Contacts Management</router-link>
        </div>
        <ul class="flex space-x-4">
          <li>
            <router-link class="text-gray-300 hover:text-white" to="/">Contacts</router-link>
          </li>
          <li>
            <router-link class="text-gray-300 hover:text-white" to="/groups">Groups</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  