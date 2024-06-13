import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../components/ContactList.vue";
import ContactForm from "../components/ContactForm.vue";
import GroupList from "../components/GroupList.vue";
import GroupForm from "../components/GroupForm.vue";
import GroupView from "../components/GroupView.vue";

const routes = [
    { path: "/", component: ContactList, name: "home" },
    { path: "/contacts", component: ContactList, name: "contacts" },
    { path: "/contacts/add", component: ContactForm, name: "add-contact" },
    {
        path: "/contacts/edit/:id",
        component: ContactForm,
        name: "edit-contact",
        props: true,
    },
    { path: "/groups", component: GroupList, name: "groups" },
    { path: "/groups/add", component: GroupForm, name: "add-group" },
    { 
      path: "/groups/edit/:id",
      component: GroupForm,
      name: "edit-group",
      props:true,
    },
    { 
      path: "/groups/view/:id",
      component: GroupView,
      name: "group-details",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
