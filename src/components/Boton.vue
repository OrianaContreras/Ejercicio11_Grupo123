<template>
  <div>
    <b-col class="mt-3">
      <b-button type="button" variant="primary" @click=agregarTareaAction() :disabled=disabled >Agregar</b-button
      ></b-col
    >
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:"Boton",
  computed:{
    ...mapState([ 
      "disabled"
    ])
  },
  methods:{
    ...mapActions([
      "agregarTareaAction"
    ])
  }
}
</script>
