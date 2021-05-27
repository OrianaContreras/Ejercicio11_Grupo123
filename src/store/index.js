import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        form: {
            NombreTarea: "",
            FechaInicio: "",
            FechaTermino: "",
            NombreProyecto: "",
            Descripcion: ""
        },
        arrayRutas: [{
            valor: "Home",
            path: "/"
        }, {
            valor: "proyecto1",
            path: "/tareasPorProyecto/proyecto1"
        }, {
            valor: "proyecto2",
            path: "/tareasPorProyecto/proyecto2"
        }],
        arrayTareas: [],
        arrayColores: ["danger","success","warning", "info", "primary", "secondary", "light", "dark"],
        disabled: true
    },
    mutations: {
        checkers(state, disabled) {
            state.disabled = disabled
        },
        agregarTarea(state) {
            state.arrayTareas.push({
                ...state.form,
                id: Date.now().toString(36) + (Math.random() * 100).toString(36)

            })
            console.log(state.arrayTareas)
        },
        eliminarTarea(state, id) {

            state.arrayTareas = state.arrayTareas.filter(el => el.id != id)

        },

        filtroDelArrayVista(state, NombreProyecto) {
            state.arregloFiltrado = state.arrayTareas.filter(el => el.NombreProyecto == NombreProyecto)
            console.log(state.arregloFiltrado)

        }


    },
    actions: {
        inputCheckers({
            commit,
            state
        }) {
            if (state.form.NombreTarea.length == 0 || state.form.FechaInicio.length == 0 ||
                state.form.FechaTermino.length == 0 || state.form.NombreProyecto.length == 0 ||
                state.form.Descripcion.length == 0) {
                commit("checkers", true);
            } else {
                commit("checkers", false);
            }
        },
        agregarTareaAction({
            commit
        }) {
            commit("agregarTarea")
        },
        borrarTareaAction({
            commit
        }, id) {
            commit("eliminarTarea", id)
        },
        tareasPorProyectoAction(state, NombreProyecto) {
            state.commit("filtroDelArrayVista", NombreProyecto)

        },
    },
    getters: {
        mostrarRutasProyectos: function (state) {

            return state.arrayRutas

        }
    }
});