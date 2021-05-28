<template>
  <div>
    <h1>Las Tareas agregadas del Proyecto {{ $route.params.proyecto }} son:</h1>
    <Card :array="arrayfiltrado" />
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "LandingTareasPorProyecto",
  components: { Card },
  methods: {
    ...mapActions(["tareasPorProyectoAction"]),
  },
  computed: {
    ...mapState(["arrayfiltrado"]),
  },


  mounted() {
    this.tareasPorProyectoAction(this.$route.params.proyecto);
  },

  beforeUpdate() {
    this.tareasPorProyectoAction(this.$route.params.proyecto);
  },
};
</script>

<style></style>
