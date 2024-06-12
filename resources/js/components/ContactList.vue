<template>
    <div>
        <h1>Contacts</h1>
        <button @click="addContact" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Contact</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.group.name }}</td>
                    <td>
                        <button @click="editContact(contact.id)">Edit</button>
                        <button @click="deleteContact(contact.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            contacts: [],
        };
    },
    created() {
        this.fetchContacts();
    },
    methods: {
        fetchContacts() {
            axios.get("/api/contacts").then((response) => {
                this.contacts = response.data;
            });
        },
        addContact() {
            this.$router.push({ name: "add-contact" });
        },
        editContact(id) {
            this.$router.push({ name: "edit-contact", params: { id } });
        },
        deleteContact(id) {
            axios.delete(`/api/contacts/${id}`).then(() => {
                this.fetchContacts();
            });
        },
    },
};
</script>
