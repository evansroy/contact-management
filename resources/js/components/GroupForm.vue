<template>
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">
            {{ isEditing ? "Edit Group" : "Add Group" }}
        </h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label class="block text-gray-700">Name</label>
                <input
                    type="text"
                    v-model="group.name"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Description</label>
                <textarea
                    v-model="group.description"
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                    rows="3"
                ></textarea>
            </div>
            <div class="flex justify-between">
                <button
                    type="submit"
                    class="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {{ isEditing ? "Update" : "Submit" }}
                </button>
                <button
                    type="button"
                    @click="handleDelete"
                    class="bg-red-500 text-white px-4 py-2 rounded"
                    v-if="isEditing"
                >
                    Delete
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
    props: ["id"],
    data() {
        return {
            group: {
                id: "",
                name: "",
                description: "",
            },
            isEditing: false,
        };
    },
    created() {
        if (this.id) {
            this.loadGroup(this.id);
        }
    },
    methods: {
        async handleSubmit() {
            const toast = useToast();
            try {
                if (this.isEditing) {
                    await axios.put(`/api/groups/${this.group.id}`, this.group);
                    toast.success("Group updated successfully");
                } else {
                    await axios.post("/api/groups", this.group);
                    toast.success("Group added successfully");
                }
                this.$router.push({ name: "groups" });
            } catch (error) {
                console.error(
                    "Error in handleSubmit:",
                    error.response ? error.response.data : error.message
                );
            }
        },
        async handleDelete() {
            const toast = useToast();
            try {
                await axios.delete(`/api/groups/${this.group.id}`);
                toast.success("Group deleted successfully");
                this.$router.push({ name: "home" });
            } catch (error) {
                console.error(
                    "Error in handleDelete:",
                    error.response ? error.response.data : error.message
                );
            }
        },
        async loadGroup(id) {
            try {
                const response = await axios.get(`/api/groups/${id}`);
                this.group = response.data;
                this.isEditing = true;
            } catch (error) {
                console.error(
                    "Error in loadGroup:",
                    error.response ? error.response.data : error.message
                );
            }
        },
    },
};
</script>

<style scoped>
/* Optional: Add any scoped styles here */
</style>
