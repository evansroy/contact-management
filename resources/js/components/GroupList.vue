<template>
    <div class="container mx-auto p-4">
        <div class="mb-4 flex justify-between">
            <button
                @click="addGroup"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Group
            </button>
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search groups..."
                class="p-2 border border-gray-300 rounded"
            />
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 bg-gray-200">Name</th>
                        <th class="py-2 px-4 bg-gray-200">Description</th>
                        <th class="py-2 px-4 bg-gray-200">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="group in filteredGroups"
                        :key="group.id"
                        class="border-t"
                    >
                        <td class="py-2 px-4">{{ group.name }}</td>
                        <td class="py-2 px-4">{{ group.description }}</td>
                        <td class="py-2 px-4 space-x-1">
                            <button
                                @click="editGroup(group.id)"
                                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Edit
                            </button>
                            <button
                                @click="deleteGroup(group.id)"
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Delete
                            </button>
                            <button
                                @click="viewGroupDetails(group.id)"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            >
                                View Details
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
import { useToast } from "vue-toastification"; // Assuming you use toast notifications

export default {
    data() {
        return {
            groups: [],
            searchQuery: "",
        };
    },
    computed: {
        filteredGroups() {
            return this.groups.filter((group) => {
                return (
                    group.name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    (group.description &&
                        group.description
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase()))
                );
            });
        },
    },
    created() {
        this.fetchGroups();
    },
    methods: {
        fetchGroups() {
            axios.get("/api/groups").then((response) => {
                this.groups = response.data;
            });
        },
        addGroup() {
            this.$router.push({ name: "add-group" });
        },
        editGroup(id) {
            this.$router.push({ name: "edit-group", params: { id } });
        },
        deleteGroup(id) {
            axios.delete(`/api/groups/${id}`).then(() => {
                this.fetchGroups();
                this.showToast("Group deleted successfully", "success");
            });
        },
        viewGroupDetails(id) {
            this.$router.push({ name: "group-details", params: { id } });
        },
        showToast(message, type) {
            const toast = useToast();
            toast[type](message);
        },
    },
};
</script>

<style scoped>
/* Optional: Add any scoped styles here */
</style>
