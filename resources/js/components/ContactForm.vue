<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Contact Form</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Name</label>
        <input type="text" v-model="contact.name" class="w-full p-2 border border-gray-300 rounded mt-1" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input type="email" v-model="contact.email" class="w-full p-2 border border-gray-300 rounded mt-1" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Phone</label>
        <input type="text" v-model="contact.phone" class="w-full p-2 border border-gray-300 rounded mt-1">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Group</label>
        <select v-model="contact.group_id" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.name }}</option>
        </select>
      </div>
      <div class="flex justify-between">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        <button type="button" @click="handleDelete" class="bg-red-500 text-white px-4 py-2 rounded" v-if="isEditing">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contact: {
        id: '',
        name: '',
        email: '',
        phone: '',
        group_id: ''
      },
      groups: [],
      isEditing: false
    };
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    async fetchGroups() {
      try {
        const response = await axios.get('/api/groups');
        this.groups = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error.response ? error.response.data : error.message);
      }
    },
    async handleSubmit() {
      try {
        if (this.isEditing) {
          await axios.put(`/api/contacts/${this.contact.id}`, this.contact);
        } else {
          await axios.post('/api/contacts', this.contact);
        }
        this.resetForm();
      } catch (error) {
        console.error('Error in handleSubmit:', error.response ? error.response.data : error.message);
      }
    },
    async handleDelete() {
      try {
        await axios.delete(`/api/contacts/${this.contact.id}`);
        this.resetForm();
      } catch (error) {
        console.error('Error in handleDelete:', error.response ? error.response.data : error.message);
      }
    },
    resetForm() {
      this.contact = {
        id: '',
        name: '',
        email: '',
        phone: '',
        group_id: ''
      };
      this.isEditing = false;
    },
    async loadContact(id) {
      try {
        const response = await axios.get(`/api/contacts/${id}`);
        this.contact = response.data;
        this.isEditing = true;
      } catch (error) {
        console.error('Error in loadContact:', error.response ? error.response.data : error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
