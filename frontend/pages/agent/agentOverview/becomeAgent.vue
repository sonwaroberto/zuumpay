<template>
  <v-main class="bgImage">
    <section class="bgColor">
      <v-container>
        become Agent
      </v-container>
    </section>
  </v-main>
</template>

<script>
  export default{
    layout:"overview",
  }
    
</script>

<style>
  .bgImage {
    background: linear-gradient(120deg,rgba(255, 255, 255,20%),rgba(122, 130, 198,20%),rgba(70, 82, 176,20%));
  }
  .bgColor {
    background-image: url('../../../static/Logo_alt_dark_v04-1.png'); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50%;
    min-height: 100vh;
  }
</style>