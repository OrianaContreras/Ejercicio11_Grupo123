<template>
  <div>
    <div class="container m-4">
      <b-row>
        <b-col class="col-4">
          <Formulario />
          <Boton />
        </b-col>
        <b-col class="col-8 d-flex">
          <Card />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Formulario from "@/components/FormularioTarea.vue";
import Card from "@/components/Card.vue";
import Boton from "@/components/Boton.vue";

export default {
  name: "TODOlist",
  components: {
    Formulario,
    Card,
    Boton,
  },
};
</script>
