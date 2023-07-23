<template>
  <v-main class="bgi" style="max-width: 100%;">
    <v-card class="rounded-0 mt-8" v-if="!authLoading">
      <v-card-title>Manage your subscriptions...</v-card-title>
      <v-app-bar absolute dark color="info">
        <v-tabs align-with-title class="d-flex flex-column" show-arrows>
          <v-tab @click="HideActions(),showSubscription = true">show all subscriptions</v-tab>
          <v-tab @click="HideActions(),cancel = true">cancel </v-tab>
          <v-tab @click="HideActions(),update = true">update </v-tab>
          <v-tab @click="HideActions(),renew = true">renew</v-tab>
          <v-tab @click="HideActions(),subscribe= true">subscribe</v-tab>
        </v-tabs>
      </v-app-bar>
      <v-sheet>
        <v-container style="height: 64px;"></v-container>
      </v-sheet>
    </v-card>
    <v-card class="d-flex flex-md-row flex-column">
      <v-card-title class="info--text balance" style="width:fit-content;">
        Balance : {{$store.state.account.accountBalance}} {{$store.state.account.currency}}  
      </v-card-title>
      <v-divider class="d-md-none mt-4"></v-divider>
      <!-- show subscription -->
      <v-card v-if="showSubcription">
        <v-card-actions>
          <v-btn @click="susbscription()"></v-btn>
        </v-card-actions>
        <v-card-title>Your subscription amount</v-card-title>
        <v-card-text v-if="subscriptionData.amount !=''">{{subscriptionData.subscriptionAmount}}</v-card-text>
      <v-card></v-card>
      </v-card>
    </v-card>  
    <div class="d-flex align-center justify-center">
      <v-alert dense text type="success" v-model="success" class="mt-8">
        {{transaction}} of {{transactionAmount}} made successfully!!!
      </v-alert> 
    </div>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data() {
      return {
        loading:false,
        showSubscription:true,
        cancel:false,
        update:false,
        renew:false,
        subscribe:false,
        subscriptionData:{
          subscriptionAmount:'',
          subsciptionId:''
        },
        cancelSubscription:{
          subsciptionId:''
        }
      }
    },
    methods: {
      HideActions(){
       this.showSubscription = false
       this.cancel = false
       this.update = false
       this.renew = false
       this.subscribe = false
      },
      async showsubscription(){
        this.loading = true
        this.$axios.$post(`/subscription/showSubscription/${subscriptionData.subscriptionId}`,{
          amount:subscriptionData.amount,
          subscriptionId:subscriptionData.subsciptionId
        }).then((data)=>{
          console.log(data)
          this.loading = false
        }).catch((e)=>{
          console.log(e)
          this.loading = false
        }).finally((state)=>{
          this.loading = false
          return
        })
      },
      async cancelSubscription(){
        this.loading = true
        this.$axios.$post(`/subscription/cancel/${cancelSubscription/subsciptionId}`,{
          subscriptionId:this.cancelSubscription.subsciptionId
        }).then((body)=>{
          console.log(body)
          this.loading = false
          reutnr
        })
      }
    }
  }
</script>

<style lang="scss">

</style>