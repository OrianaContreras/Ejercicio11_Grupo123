<template>
  <div>
    <b-row>
      <b-col class="d-flex justify-content-center">
        <b-row class="mx-auto">
          <b-col v-for = "tarea, index in array" :key="index">
            <b-card
              :bg-variant="arrayColores[Math.floor(Math.random() * valorArregloColores)]"
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
                <b-icon icon="trash-fill" aria-hidden="true" font-scale="1.5" @click="borrarTareaAction(tarea.id)" style="cursor: pointer"></b-icon>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from "vuex"

export default {
  
  name: "Card",
  props:{
    array:Array
  },
computed: {
  ...mapState(['arrayColores','largoColores']),
  ...mapGetters (["valorArregloColores"])        
      },
  methods:{

    ...mapActions([
      "borrarTareaAction",
      

    ])
    },

};

  
</script>
<style>
.pointer {
cursor: pointer;
}
</style>
