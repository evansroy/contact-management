<template>
    <div class="container mx-auto p-4">
        <div class="mb-4">
            <h2 class="text-2xl font-bold">{{ group.name }}</h2>
            <p class="text-gray-600">{{ group.description }}</p>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 bg-gray-200">Name</th>
                        <th class="py-2 px-4 bg-gray-200">Email</th>
                        <th class="py-2 px-4 bg-gray-200">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="contact in contacts"
                        :key="contact.id"
                        class="border-t"
                    >
                        <td class="py-2 px-4">{{ contact.name }}</td>
                        <td class="py-2 px-4">{{ contact.email }}</td>
                        <td class="py-2 px-4">{{ contact.phone }}</td>
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
            group: {},
            contacts: [],
        };
    },
    mounted() {
        // Fetch group details and its contacts on component mount
        this.fetchGroupDetails();
    },
    methods: {
        fetchGroupDetails() {
            const groupId = this.$route.params.id; // Assuming group id is passed via route params
            axios
                .get(`/api/groups/${groupId}`)
                .then((response) => {
                    this.group = response.data;
                    this.contacts = this.group.contacts; // Assuming your API returns contacts under group.contacts
                })
                .catch((error) => {
                    console.error("Error fetching group details:", error);
                });
        },
    },
};
</script>

<style scoped>
/* Optional: Add any scoped styles here */
</style>
