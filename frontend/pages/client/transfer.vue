<template>
  <v-main class="bgi d-flex justify-center align-center" style="max-width: 100%;">
    <v-container class="d-flex flex-column justify-center align-center">
      <v-card width="460" class="primary--text" height="auto" color="#f8f8f9" elevation="0">
        <v-card-title class="d-flex align-center justify-center" style="background-color:#b0b5df;width:100%">
          Transfer money...
        </v-card-title>
        <v-card-text style="background-color:#e3e4f0;width:100%">
          <span class="d-block" style="min-height: 20px;"></span>
          <VO ref="observer" tag="form">
            <VP rules="required|numeric" v-slot="{ errors }" name="send amount">
              <v-text-field :error-messages="errors" class="rounded-lg" v-model="amount" outlined placeholder="Enter amount">
                <template v-slot:label>
                  <v-badge bordered dot inline left>send amount</v-badge>
                </template>
                <template v-slot:append>
                  <v-select dense relative style="top:10px" v-model="currency" :items="items"> 
                  </v-select> 
                </template>
              </v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="zuumapy Id">
              <v-text-field :error-messages="errors" class="rounded-lg" v-model="zuumpayId" outlined placeholder="Enter or select zuumpay Id">
                <template v-slot:label>
                  <v-badge bordered dot inline left>zuumapy Id</v-badge>
                </template>
                <template v-slot:append>
                  <v-select dense relative style="top:10px" v-model="zuumpayId" :items="zuumpayIds"> 
                  </v-select> 
                </template>
              </v-text-field>
            </VP>
            <VP rules="required|numeric" v-slot="{ errors }" name="pin">
              <v-text-field :error-messages="errors" class="rounded-lg" v-model="pin" outlined placeholder="Enter your pin">
                <template v-slot:label>
                  <v-badge bordered dot inline left>Enter your pin</v-badge>
                </template>
              </v-text-field>
            </VP>
          </VO>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn color="primary" :loading="loading" class="onPrimary--text pa-4" @click="transfer()">transfer money</v-btn>
          </v-card-actions> 
        </v-card-text>
      </v-card>
      <v-alert dense text type="success" v-model="success" class="mt-8">
        {{text}}
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
        items:["USD","XAF","EUR"],
        currency:"XAF",
        amount:"",
        userId:this.$store.state.account.id,
        zuumpayId:'',
        zuumpayIds:[],
        pin:'',
        success:false,
        text:""
      }
    },
    async created() {
      const accounts = await this.$fire.firestore.collection("accounts").get()
      accounts.forEach((doc)=>{
        this.zuumpayIds.push(doc.data().zuumpayId)
      })
    },
    methods:{
      async transfer() {
        const validInput = await this.$refs.observer.validate()
        if(!validInput) return
        this.loading = true 
        this.$axios.$post("/wallet/api/v1/user",{
          amount: this.amount,
          pin: this.pin,
          zuumpayId: this.zuumpayId,
          date: new Date(),
        }).then((res) => {
          console.log(res)
          this.text = res
          this.success = true
          this.loading = false
        }).catch((e) => {
          console.log(e)
          this.loading = false
        }).finally(() => {
          this.loading = false
        })    
      },
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