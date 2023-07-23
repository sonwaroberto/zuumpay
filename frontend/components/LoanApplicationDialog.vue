<template>
  <v-app>
    <!--withdraw step 1 dialog-->
    <v-dialog persistent v-model="LoanApplicationDialog" width="400">
      <v-card outlined class="form d-flex flex-column rounded-lg align-center  justify-space-around primary--text" height="">
        <v-card-title>
          <span class="text-h5 text-uppercase font-weight-bold">loan application</span>
        </v-card-title>
        <v-card-text>
          <VO ref="observer" tab="form" >
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="amount">
                <v-text-field label="Amount"
                  dense class="rounded-lg mr-4" outlined placeholder="Amount"
                ></v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Duration">
                <v-text-field label="Duration"
                  dense class="rounded-lg " outlined placeholder="Duration"
                ></v-text-field>
              </VP>
            </div>
            <VP rules="required" v-slot="{ errors }" name="Re-payment">
              <v-text-field label="Re-payment"
                dense class="rounded-lg"  outlined placeholder="Re-payment"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Loan Type">
              <v-text-field label="Loan Type"
                dense class="rounded-lg"  outlined placeholder="Loan Type"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Purpose of Loan">
              <v-text-field label="Purpose of Loan"
                dense class="rounded-lg"  outlined placeholder="Purpose of Loan"
              ></v-text-field>
            </VP>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Name">
                <v-text-field label="Name"
                  dense class="rounded-lg mr-4"  outlined placeholder="Name"
                ></v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Phone">
                <v-text-field label="Phone"
                  dense class="rounded-lg "  outlined placeholder="Phone"
                ></v-text-field>
              </VP>
            </div>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Email">
                <v-text-field label="Email"
                  dense class="rounded-lg mr-4"  outlined placeholder="Email"
                ></v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Password">
                <v-text-field label="Password"
                  dense class="rounded-lg "  outlined placeholder="Password"
                ></v-text-field>
              </VP>
            </div>
          </VO>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="LoanApplicationStep2 = true" class="onPrimary--text pa-4">
            next step
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--loan application step 2 dialog-->
    <v-dialog persistent v-model="LoanApplicationStep2" width="400">
      <v-card outlined class="form d-flex flex-column rounded-lg align-center  justify-space-around primary--text" height="">
        <v-card-title>
          <span class="text-h5 text-uppercase font-weight-bold">loan application</span>
        </v-card-title>
        <v-card-text>
          <VO ref="observer" tab="form" >
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Age">
                <v-text-field label="Age"
                  dense class="rounded-lg mr-4"  outlined placeholder="Age"
                ></v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Sexe">
                <v-text-field label="Sexe"
                  dense class="rounded-lg "  outlined placeholder="Sexe"
                ></v-text-field>
              </VP>
            </div>
            <VP rules="required" v-slot="{ errors }" name="Employment Status">
              <v-text-field label="Employment Status"
                dense class="rounded-lg"  outlined placeholder="Employment Status"
              ></v-text-field>
            </VP> 
            <VP rules="required" v-slot="{ errors }" name="Enter Your Job">
              <v-text-field label="Enter Your Job"
                dense class="rounded-lg"  outlined placeholder="Enter Your Job"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Average Salary">
              <v-text-field label="Average Salary"
                dense class="rounded-lg"  outlined placeholder="Average Salary"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Marital Status">
              <v-text-field label="Marital Status"
                dense class="rounded-lg"  outlined placeholder="Marital Status"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Number of kids">
              <v-text-field label="Number of kids"
                dense class="rounded-lg"  outlined placeholder="Number of kids"
              ></v-text-field>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="LoanApplicationStep2= false,LoanApplicationStep3 = true,LoanApplicationDialog = false" class="onPrimary--text pa-4">
            final step
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <!--loan application step 3 dialog-->
     <v-dialog persistent v-model="LoanApplicationStep3" width="400">
      <v-card outlined class="form d-flex flex-column rounded-lg align-center  justify-space-around primary--text" height="400">
        <v-card-title>
          <span class="text-h5 text-uppercase font-weight-bold">loan application</span>
        </v-card-title>
        <v-card-text>
          <VO ref="observer" tab="form" >
            <VP rules="required" v-slot="{ errors }" name="Id Type">
              <v-text-field label="Id Type"
                dense class="rounded-lg"  outlined placeholder="Id Type"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Expiry Date">
              <v-text-field label="Expiry Date"
                dense class="rounded-lg"  outlined placeholder="Expiry Date"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="ID Photo">
              <v-text-field label="Update ID Photo"
                dense class="rounded-lg"  outlined placeholder="Update Id Photo"
              ></v-text-field>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="LoanApplicationStep3 = false" class="onPrimary--text pa-4">
            get your loan
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        require: true
      }
    },
    data() {
      return {
        LoanApplicationStep2:false,
        LoanApplicationStep3:false
      }
    },
    computed: {
      LoanApplicationDialog: {
        get() { return this.value },
        set(val) { this.$emit('input', val) }
      }
    }  
  }
</script>

<style lang="scss">
  body {
    .form { 
      background: linear-gradient(45deg, #bcbfd4 , #cccee0 );
      .v-input__control > .v-input__slot fieldset {
        background: linear-gradient(45deg,#f2f3fd,#c2ceeb) !important;
        border: none;
      }
    }
    .v-label{
      color: #4652B0 !important;
    }
  }
</style>