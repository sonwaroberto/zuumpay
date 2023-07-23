<template>
  <v-main>
    <create-account-dialog v-model="CreateDialog"/>
  </v-main>
</template>

<script>
  export default {
    name: "App",
    layout: "guest",
    data() {
      return {
        CreateDialog: false,
        credential: {
          email: '',
          password: '',
        },
      }
    }
  }
</script>
