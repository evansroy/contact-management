<template>
    <div class="container mx-auto p-4">
        <div class="mb-4 flex justify-between">
            <button
                @click="addContact"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Contact
            </button>
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search contacts..."
                class="p-2 border border-gray-300 rounded"
            />
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 bg-gray-200">Name</th>
                        <th class="py-2 px-4 bg-gray-200">Email</th>
                        <th class="py-2 px-4 bg-gray-200">Phone</th>
                        <th class="py-2 px-4 bg-gray-200">Group</th>
                        <th class="py-2 px-4 bg-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="contact in filteredContacts"
                        :key="contact.id"
                        class="border-t"
                    >
                        <td class="py-2 px-4">{{ contact.name }}</td>
                        <td class="py-2 px-4">{{ contact.email }}</td>
                        <td class="py-2 px-4">{{ contact.phone }}</td>
                        <td class="py-2 px-4">{{ contact.group.name }}</td>
                        <td class="py-2 px-4 space-x-1">
                            <button
                                @click="editContact(contact.id)"
                                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Edit
                            </button>
                            <button
                                @click="deleteContact(contact.id)"
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            contacts: [],
            searchQuery: "",
        };
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter((contact) => {
                return (
                    contact.name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    contact.email
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    (contact.phone &&
                        contact.phone
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase())) ||
                    contact.group.name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                );
            });
        },
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
                toast.success("Contact Deleted successfully");
            });
        },
    },
};
</script>

<style scoped>
/* Optional: Add any scoped styles here */
</style>
