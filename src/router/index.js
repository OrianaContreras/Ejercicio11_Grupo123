import Vue from "vue";
import VueRouter from "vue-router";
import todolist from "../views/TODOlist.vue";
import LandingTareasPorProyecto from "../views/LandingTareasPorProyecto.vue";

// seguir trabajando en el filter para recibir el params de la ruta y comparar dentro del filter


Vue.use(VueRouter);

const routes = [

    {
        path: "/",
        name: "todolist",
        component: todolist,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/tareasPorProyecto/:proyecto",
        name: "TareasPorProyecto",
        component: LandingTareasPorProyecto,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;