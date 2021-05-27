<template>
  <div>
    <b-row>
      <b-col class="d-flex justify-content-center">
        <b-row class="mx-auto">
          <b-col v-for = "tarea, index in arrayTareas" :key="index">
            <b-card
              :bg-variant="arrayColores[3]"
              text-variant="white"
              header="Tareas"
              class="text-center"
              style="max-width: 20rem"
            >
              <b-card-text>Nombre de Tarea: {{ tarea.NombreTarea }}</b-card-text>
              <b-card-text>Fecha de Inicio: {{ tarea.FechaInicio }}</b-card-text>
              <b-card-text>Fecha de Termino: {{ tarea.FechaTermino }}</b-card-text>
              <b-card-text>Nombre de Proyecto: {{ tarea.NombreProyecto }}</b-card-text> 
              <b-card-text>Descripcion: {{ tarea.Descripcion }}</b-card-text>
              <div class="d-flex justify-content-end mt-3">
                {{tarea.id}}<b-icon icon="trash-fill" aria-hidden="true" font-scale="1.5" @click="borrarTareaAction(tarea.id)" style="cursor: pointer"></b-icon>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex"

export default {
  
  name: "Card",
computed: {
  ...mapState(['arrayTareas']),
          ...mapState(['arrayColores']),
      },
  methods:{

    ...mapActions([
      "borrarTareaAction",
      

    ])
    },
  created() {
  },
};
</script>
<style>
.pointer {
cursor: pointer;
}
</style>
