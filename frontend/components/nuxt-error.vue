<template>
  <div class="__nuxt-error-page">
    <div class="d-flex flex-column align-center justify-center">
      <v-img src="../Logo_alt_dark_v04-3.png" height="80" width="200"/>
      <h1 class="secondary--text d-flex align-center justify-center" style="font-size: 3rem;"><v-icon color="secondary" style="font-size: 3rem;">mdi-alert</v-icon> <span>404 !!!</span></h1>
      <div class="primary--text">Oops, we couldn't find that page. Try going...</div>
      <p class=" mt-8">
        <router-link to="/"><v-btn color="info" elevation="5" class="rounded-0">Back Home</v-btn></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  layout:"empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error'
    }
  },
  head () {
    return {
      title: "Page Not Found - ZuumPay",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  background: rgba(148, 159, 236, 0.6);
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 450px;
}

.__nuxt-error-page a {
  color: #7F828B !important;
  text-decoration: none;
}

</style>
