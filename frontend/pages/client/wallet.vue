<template>
  <v-main class="bgi" style="max-width: 100%;">
    <v-card class="rounded-0 mt-8" v-if="!authLoading">
      <v-app-bar absolute dark color="info">
        <v-tabs align-with-title class="d-flex flex-column" show-arrows>
          <v-tab @click="HideActions(),newReserve = true">new reserve </v-tab>
          <v-tab @click="HideActions(),autoReserve = true">auto reserve </v-tab>
          <v-tab @click="HideActions(),addReserve = true">add reserve</v-tab>
          <v-tab @click="HideActions(),removeReserve= true">remove reserve</v-tab>
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
      <!-- new Reserve -->
      <VO ref="observer" class="ml-0 ml-md-8 flex-grow-1" tab="form" v-if="newReserve">
        <VP rules="required|numeric" v-slot="{ errors }" name="Amount">
          <v-text-field
            type="number" 
            v-model="newReserveData.amount"
            :error-messages="errors"
            label="Input Amount"
            style="max-width: 90%;"
            class="ml-4 ml-md-0"
          >
          </v-text-field>
        </VP>
        <VP rules="required" v-slot="{ errors }" name="new reserve end date">
          <v-text-field 
            label="Date End Reserve"
            type="date"
            v-model="newReserveData.endDate"
            :error-messages="errors"
            class="mt-4 ml-4 ml-md-0"
            style="max-width: 90%;"
            ></v-text-field>
        </VP>
        <v-card-actions class="d-flex align-center justify-center">
          <v-btn color="primary" :loading="loading" @click="newreserve()">reserve</v-btn>
        </v-card-actions>
      </VO>
      <!-- auto reserve-->
      <VO ref="observer" class="ml-0 ml-md-8 flex-grow-1" tab="form" v-if="autoReserve">
        <VP rules="required" v-slot="{ errors }" name="reserve type">
          <v-select
          :items="typesReseve"
          v-model="autoReserveData.type"
          label="Reserve Type"
          style="max-width: 90%;"
          class="ml-4 ml-md-0"
          ></v-select>
        </VP>
        <VP rules="required|numeric" v-slot="{ errors }" name="Amount">
          <v-text-field
            type="number" 
            v-model="autoReserveData.amount"
            :error-messages="errors"
            label="Input Amount"
            class="ml-4 ml-md-0"
            style="max-width: 90%;"
          >
          </v-text-field>
        </VP>
        <VP rules="required" v-slot="{ errors }" name="auto Reserve Date">
          <v-text-field 
            label="Date End Reserve"
            type="date"
            v-model="autoReserveData.endDate"
            :error-messages="errors"
            style="max-width: 90%;"
            class="ml-4 ml-md-0"
            ></v-text-field>
        </VP>
        <v-card-actions class="d-flex align-center justify-center">
          <v-btn color="primary" :loading="loading" @click="autoreserve()">reserve</v-btn>
        </v-card-actions>
      </VO>
      <!-- add reserve-->
      <VO ref="observer" class="ml-0 ml-md-8 flex-grow-1" tab="form" v-if="addReserve">
        <VP rules="required|numeric" v-slot="{ errors }" name="Amount">
          <v-text-field
            type="number" 
            v-model="addReserveData.amount"
            :error-messages="errors"
            label="Input Amount"
            style="max-width: 90%;"
            class="ml-4 ml-md-0"
          >
          </v-text-field>
        </VP>
        <VP rules="required" v-slot="{ errors }" name="add Reserve">
          <v-select :items="oldReserves" class="mt-4 ml-4 ml-md-0" :error-messages="errors" style="max-width: 90%;" v-model="addReserveData.reserveId" solo label="reserve id"></v-select>
        </VP>
        <v-card-actions class="d-flex align-center justify-center">
          <v-btn color="primary" :loading="loading" @click="addreserve()">reserve</v-btn>
        </v-card-actions>
      </VO>
      <!-- remove reserve-->
      <VO ref="observer" class="ml-0 ml-md-8 flex-grow-1" tab="form" v-if="removeReserve">
        <VP rules="required" v-slot="{ errors }" name="remove reserve amount">
          <v-select :items="removeAmount" class="mt-4 ml-4 ml-md-0" :error-messages="errors" style="max-width: 90%;" v-model="removeReserveData.amount" solo label="choose the amount of the reserve that you want to remove"></v-select>
        </VP>
        <VP rules="required" v-slot="{ errors }" name="add Reserve">
          <v-select :items="oldReserves" class="mt-4 ml-4 ml-md-0" :error-messages="errors" style="max-width: 90%;" v-model="removeReserveData.id" solo label="choose the id of the reserve that you want to remove"></v-select>
        </VP>
        <v-card-actions class="d-flex align-center justify-center">
          <v-btn color="primary" :loading="loading" @click="removereserve()">remove</v-btn>
        </v-card-actions>
      </VO>
    </v-card>  
    <div class="d-flex align-center justify-center">
      <v-alert dense text type="success" v-model="success" class="mt-8">
        {{text}}
      </v-alert> 
    </div>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data() {
      return {
        transaction:'',
        transactionAmount:'',
        autoReserve:false,
        newReserve:true,
        addReserve:false,
        removeReserve : false,
        success:false,
        text:"",
        autoReserveData: {
          type: '',
          endDate: '',
          amount:"",
        },
        newReserveData: {
          endDate:'',
          amount:'',
        },
        addReserveData: {
          reserveId:'',
          amount:'',
        },
        removeReserveData: {
          id: '',
          amount:'',
        },
        typesReseve:['PER TRANSACTION','MONTHLY'],
        text:'',
        userId : this.$store.state.account.userId,
        loading:false,
        oldReserves : [],
        oldReservesexit:false,
        zuumpayId:'',
        removeAmount:[],
        
      }
    },
    async created() {
      const userId = this.$store.state.account.userId
      const reserve = this.$fire.firestore.collection("accounts").doc(userId).collection("reserve").get().then((snap)=>{
      if (snap.docs.length != 0) {
        snap.docs.forEach((doc)=>{
          this.oldReservesexit = true
          const reserveId = doc.id
          this.oldReserves.push(reserveId)
          const amount = doc.data().amount
          this.removeAmount.push(amount)
        })
      }
      })
    },
    methods: {
      HideActions(){
        this.newReserve = false
        this.autoReserve = false
        this.addReserve = false
        this.removeReserve = false
      },
      async autoreserve() {
        const validInput = await this.$refs.observer.validate()
        if(!validInput) return
        this.transaction = "auto reserve"
        this.transactionAmount = this.autoReserveData.amount
        this.loading = true  
        const date = this.$moment(this.autoReserveData.endDate).format('Y/M/D') 
        this.$axios.post("/wallet/api/v1/reserve/auto", {
          type: this.autoReserveData.type,
          amount: this.autoReserveData.amount,
          endDate:date,
          userId: this.userId
        }).then((res) => {
          console.log(res)
          this.text = res.data
          this.success = true
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          this.loading = false
        })   
      },
      async addreserve() {
        const validInput = await this.$refs.observer.validate()
        if(!validInput) return
        this.transaction = "add reserve"
        this.transactionAmount = this.addReserveData.amount
        this.loading = true
        this.$axios.post("/wallet/api/v1/reserve/add", {
          reserveId:this.addReserveData.reserveId,
          amount:this.addReserveData.amount,
          userId: this.userId
        }).then((res) => {
          console.log(res)
          this.text = res.data
          this.success = true
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          this.loading = false
        })
      },
      async newreserve() {
        const validInput = await this.$refs.observer.validate()
        if(!validInput) return
        this.loading = true
        this.transaction = "new reserve"
        this.transactionAmount = this.newReserveData.amount
        const date = this.$moment(this.newReserveData.endDate).format('Y/M/D')
        this.$axios.post("/wallet/api/v1/reserve/new",{
          amount:this.newReserveData.amount,
          endDate:date,
          userId: this.userId
        }).then((res) => {
          console.log(res)
          this.text = res.data
          this.success = true
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          this.loading = false
        })
      },
      async removereserve() {
        const validInput = await this.$refs.observer.validate()
        if(!validInput) return
        this.transaction = "remove reserve"
        this.transactionAmount = this.removeReserveData.amount
        this.loading = true
        this.$axios.put(`/wallet/api/v1/reserve/remove/:${this.removeReserveData.id}`, {
          reserveId : this.removeReserveData.id,
          userId: this.userId
        }).then((res) => {
          console.log(res)
          this.text = res.data
          this.success = true
        }).catch((e)=> {
          console.log(e)
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style lang="scss">
  input {
    color: #4652B0 !important;
  }
  @media (min-width:960px) {
      .balance {
        border-right: 1px solid;
        border-radius: 0 !important;
      }
    }
</style>