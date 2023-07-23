<template>
  <v-main class="bgi" style="max-width: 100%;">
    <v-container class="d-flex flex-column justify-center align-center">
      <v-alert
      color="blue-grey"
      dark
      dense
      icon="mdi-school"
      prominent
    >
     Your saving amount is {{saving}} {{currency}}
    </v-alert>
  </v-container>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data(){
      return{
        saving:this.$store.state.account.saving,
        currency:this.$store.state.account.currency
      }
    }
  }
</script>

<style lang="scss">

</style>