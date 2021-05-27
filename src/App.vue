<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable type="dark" variant="dark" class="d-flex justify-content-start">
        <b-navbar-brand v-for = "el, index in mostrarRutasProyectos" :key="index"> <router-link :to ="el.path"><u> {{el.valor}} </u></router-link>  </b-navbar-brand>
        <b-navbar-brand> <router-link to="/tareasPorProyecto/proyecto1"> Tareas Por Proyecto </router-link> </b-navbar-brand>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
export default({
computed:{
  ...mapGetters(["mostrarRutasProyectos"])
}
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: white;
    margin-left: 15px;

  }
}
</style>
