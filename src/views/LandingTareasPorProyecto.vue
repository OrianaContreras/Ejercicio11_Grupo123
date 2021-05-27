<template>
  <div>
    <h1>Las Tareas agregadas del Proyecto {{ $route.params.proyecto }} son:</h1>
    <Card />
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import { mapActions } from "vuex"
export default {
  name: "LandingTareasPorProyecto",
  components: { Card },
  methods: {
    ...mapActions([
      "tareasPorProyectoAction"
      ])
  },

  created() {
    this.tareasPorProyectoAction(this.$route.params.proyecto);
  },
};
</script>

<style></style>
