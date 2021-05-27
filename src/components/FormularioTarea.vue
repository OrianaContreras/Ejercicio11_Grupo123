<template>
  <div>
    {{$store.state.NombreTarea}}
    <b-form>
      <b-form-group label="Nombre Tarea" label-for="form-input-1">
        <b-form-input id="form-input-1" v-model="form.NombreTarea" @keydown="inputCheckers" type="text"></b-form-input>
      </b-form-group>
            <b-form-group label="Nombre de Proyecto" label-for="form-input-2">
        <b-form-input id="form-input-2" v-model="form.NombreProyecto" @keydown="inputCheckers" type="text"></b-form-input>
      </b-form-group>
      <b-form-group label="Descripcion" label-for="form-input-3">
        <b-form-input id="form-input-3" v-model ="form.Descripcion" @keydown="inputCheckers" type="text"></b-form-input>
      </b-form-group>
      <b-form-group label="Fecha Inicio" label-for="form-input-4">
        <b-form-input id="form-input-4" v-model="form.FechaInicio" @change="inputCheckers" type="date"></b-form-input>
      </b-form-group>
      <b-form-group label="Fecha Termino" label-for="form-input-5">
        <b-form-input id="form-input-5" v-model="form.FechaTermino" @change="inputCheckers" type="date"></b-form-input>
      </b-form-group>

    </b-form>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  name: "FormularioTarea",
      computed: {
      ...mapState([
        "form"
      ]),
    },
    methods:{
    ...mapActions([
      "inputCheckers"
    ])
    }
};
</script>

