<template>
  <v-main class="bgi d-flex justify-center align-center" style="max-width: 100%;">
    <v-container class="d-flex flex-column justify-center align-center">
      <v-card width="460" class="primary--text" height="auto" color="#f8f8f9" elevation="0">
        <v-card-title class="d-flex align-center justify-center" style="background-color:#b0b5df;width:100%">
          Make a Loan...
        </v-card-title>
        <v-card-text style="background-color:#e3e4f0;width:100%">
          <span class="d-block" style="min-height: 20px;"></span>
          <VO ref="observer" tab="form">
            <VP>
              <v-card-text>
                <v-row>
                  <v-col class="pr-4 rounded-lg">
                    <v-slider v-model="amount" class="align-center" :max="max" :min="min" hide-details>
                      <template v-slot:append>
                        <span style="width: 80px;font-weight:1000" class="secondary--text"> {{amount}}$</span> 
                      </template>
                      <template v-slot:prepend>
                        <span class="secondary--text" style="font-weight:1000">Amount</span>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
              </v-card-text>
            </VP>
            <VP rules="required|" name="service">
              <v-select class="service" v-model="loanType" :items="loanTypes" label="select service" dense outlined>
                <template v-slot:label>
                  <v-badge bordered dot inline left>select loan service</v-badge>
                </template>
              </v-select>
            </VP>
          </VO>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn color="primary" :loading="loading" class="onPrimary--text pa-4" @click="loan()">make a loan</v-btn>
          </v-card-actions> 
        </v-card-text>
      </v-card>
      <v-alert dense text type="success" v-model="success" class="mt-8">
        loan of {{amount}} made successfully!!!
      </v-alert>
    </v-container>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data() {
      return {
        loading:false,
        loanTypes:["payday loan","personal loan","business loan"],
        amount:50,
        loanType:"payday loan",
        userId:this.$store.state.account.id,
        min: 50,
        max: 100000,
        success:false
      }
    },
    methods:{
      async loan() {
        this.loading = true
        this.$axios.$post("/wallet/api/v1/loan",
        {amount:this.amount,loanType:this.loanType,userId:this.userId,date:new Date()}).then((res) => {
          this.loading = false
          this.success = true
          return
        }).catch((e) => {
          this.loading = false
          this.success = true
          return
        }).finally(() => {
          this.loading = false
          return
        })   
      }
    }
  }
</script>

<style lang="scss">
  body {
    .service {
      .v-input__append-inner {
        position: relative;
        top:8px;
      }
    }
    .v-select-list {
      background-color:#e3e4f0 !important;
      .v-list-item {
        color: #4652B0 !important;
      }
    }
    .v-input{
      input {
        color: #4652B0 !important;
      }
    }
  }
</style>