<template>
  <v-main class="bgi d-flex justify-center align-center" style="max-width: 100%;">
    <v-container class="d-flex justify-center align-center">
      <v-card width="460" class="primary--text" height="auto" color="#f8f8f9" elevation="0">
        <v-card-title class="d-flex align-center justify-center" style="background-color:#b0b5df;width:100%">
          Withdraw Money...
        </v-card-title>
        <v-card-text style="background-color:#e3e4f0;width:100%">
          <span class="d-block" style="min-height: 20px;"></span>
          <VO ref="observer" tab="form">
            <VP rules="required|numeric" name="send amount">
              <v-text-field class="rounded-lg" v-model="amount" outlined placeholder="Enter amount">
                <template v-slot:label>
                  <v-badge bordered dot inline left>withdraw amount</v-badge>
                </template>
                <template v-slot:append>
                  <v-select dense relative style="top:10px" v-model="currency" :items="items"> 
                  </v-select> 
                </template>
              </v-text-field>
              <v-text-field class="rounded-lg" v-model="phone" outlined placeholder="Enter phone number">
                <template v-slot:label>
                  <v-badge bordered dot inline left>phone number</v-badge>
                </template>
              </v-text-field>
            </VP>
          </VO>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn color="primary" :loading="loading" class="onPrimary--text pa-4" @click="withdraw()">withdraw</v-btn>
          </v-card-actions> 
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data() {
      return {
        loading:false,
        items:["USD","XAF","EUR"],
        currency:"XAF",
        amount:"",
        phone:"",
        userId:this.$store.state.account.id
      }
    },
    methods:{
      async withdraw() {
        this.loading = true
        await this.$axios.$post("/withdraw",{
          "data": {
            amount: this.amount,
            phone: this.phone,
            userId: this.userId
          }
        }).then((res) => {
          console.log(res)
          this.loading = false
          return
        }).catch((e) => {
          console.log(e)
          this.loading = false
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