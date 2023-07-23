<template>
  <div style="background-color: white;" class="mt-16 mt-md-0">
    <v-container class="flexColumn flex-md-row text-md-left text-center">
      <v-card :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '316px'" outlined color="transparent">
        <v-card-text class="flexColumn align-lg-start" style="font-family:Montserrat">
          <v-img max-height="100" max-width="200" src="../Logo_alt_dark_v04-3.png"/> 
          The secured, easiest, and fastest way to instantly transfer and spend your money.
          <v-icon color="#021291">mdi-facebook</v-icon>
        </v-card-text>
      </v-card >
      <v-spacer/>
      <div class="d-flex flex-column flex-md-row flex-grow-1 justify-space-around">
        <v-card :elevation="0">
          <v-card-title class="flexColumn align-md-start">Services</v-card-title>
          <v-card-text>
            Remittance<br>
            Micro loans<br>
            zummPay<br>
            Crypto Exchange<br>
            Onlie Shopping<br>
            Refund
          </v-card-text>
        </v-card>
        <v-card :elevation="0">
          <v-card-title class="flexColumn align-md-start">Zuumpay</v-card-title>
          <v-card-text>
            What we do<br>
            Vision<br>
            News/Blog<br>
            Careers<br>
            Sign Up<br><br>
          </v-card-text>
        </v-card>
        <v-card :elevation="0" class="flexColumn align-md-start">
          <v-card-title >Our office</v-card-title>
          <v-card-text>
            Buea<br>
            Great Soppo, First trust building<br>
            P.O Box 2021<br>
            Douala<br>
            Avenue de bank, Bonajo<br>
            P.O Box 30B215
          </v-card-text>
        </v-card>
      </div>
    </v-container>
    <v-footer padless color="primary">
      <v-col class="text-center white--text" cols="12">
        &copy; 2021 Zuumpay All rights reserved.
      </v-col>
    </v-footer>
  </div>
</template>


<script>
  export default {
    name: "App",
    layout:'auth'
  }
</script>

<style lang="scss">
  .flexColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>