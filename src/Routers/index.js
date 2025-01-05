import { createRouter, createWebHistory } from "vue-router"
import Home from "@/Views/HomeView.vue"
import JobsView from "@/Views/JobsView.vue";
import NotFoundView from "@/Views/NotFoundView.vue";
import JobView from "@/Views/JobView.vue";
import AddJobView from "@/Views/AddJobView.vue";
import EditJobView from "@/Views/EditJobView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,
        },
        {
            path:"/job/:id",
            name:"job",
            component:JobView,
        },
        {
            path:"/jobs/add",
            name:"add-job",
            component:AddJobView,
        },
        {
            path:"/jobs/edit/:id",
            name:"edit-job",
            component:EditJobView, 
        },
        {
            path:"/:catchAll(.*)",
            name:"not-found",
            component:NotFoundView,
        },
    ]
})

export default router;