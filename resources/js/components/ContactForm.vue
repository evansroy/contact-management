<template>
    <div>
      <h1>{{ isEditMode ? 'Edit Contact' : 'Add Contact' }}</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" />
          <span v-if="!$v.form.name.required">Name is required</span>
        </div>
  
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" />
          <span v-if="!$v.form.email.required">Email is required</span>
          <span v-if="!$v.form.email.email">Email must be valid</span>
        </div>
  
        <div>
          <label for="phone">Phone</label>
          <input type="text" id="phone" v-model="form.phone" />
        </div>
  
        <div>
          <label for="group_id">Group</label>
          <select id="group_id" v-model="form.group_id">
            <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.name }}</option>
          </select>
          <span v-if="!$v.form.group_id.required">Group is required</span>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { required, email } from '@vuelidate/validators';
  import useVuelidate from '@vuelidate/core';
  import axios from 'axios';
  import { ref, reactive, toRefs } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'ContactForm',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const isEditMode = ref(!!route.params.id);
  
      const form = reactive({
        name: '',
        email: '',
        phone: '',
        group_id: '',
      });
  
      const rules = {
        name: { required },
        email: { required, email },
        group_id: { required },
      };
  
      const v$ = useVuelidate(rules, form);
      const groups = ref([]);
  
      const fetchGroups = async () => {
        const response = await axios.get('/api/groups');
        groups.value = response.data;
      };
  
      const fetchContact = async (id) => {
        const response = await axios.get(`/api/contacts/${id}`);
        Object.assign(form, response.data);
      };
  
      const handleSubmit = async () => {
        v$.value.$touch();
        if (!v$.value.$invalid) {
          if (isEditMode.value) {
            await axios.put(`/api/contacts/${route.params.id}`, form);
          } else {
            await axios.post('/api/contacts', form);
          }
          router.push({ name: 'contacts' });
        }
      };
  
      if (isEditMode.value) {
        fetchContact(route.params.id);
      }
  
      fetchGroups();
  
      return {
        ...toRefs(form),
        groups,
        handleSubmit,
        isEditMode,
        v$,
      };
    },
  };
  </script>
  