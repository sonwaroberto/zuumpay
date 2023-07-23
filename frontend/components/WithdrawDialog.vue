<template>
  <v-app>
      <!--withdraw step 1 dialog-->
    <v-dialog persistent v-model="WithdrawDialog" width="400">
      <v-card :elevation="0" color="transparent" outlined class="form d-flex flex-column rounded-xl align-center justify-space-around primary--text" height="400">
        <v-card-title>
          <span class="text-h5 text-uppercase font-weight-bold">withdraw</span>
        </v-card-title>
        <v-card-text>
          <VO ref="observer" tab="form">
            <VP rules="required" v-slot="{ errors }" name="amount">
              <v-text-field label="Enter amount" class="rounded-xl" outlined placeholder="Enter amount"
              ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Destination">
              <v-text-field label="Destination"
                 class="rounded-xl"  outlined placeholder="Destination"
              ></v-text-field>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="approveDialog = true" class="onPrimary--text pa-4">
            approve
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-card width="500" height="width=100%" dark class="form flexColumn rounded-xl justify-space-around mt-0" > 
      <v-card-text>
        <VO ref="observer" tab="form">
          <VP rules="required|numeric" v-slot="{ errors }" name="full name">
            <v-text-field label="Full Name" class="rounded-lg" outlined placeholder="Full Name">
            </v-text-field>
          </VP>
          <div class="d-flex">
            <VP rules="required|numeric" v-slot="{ errors }" name="comapany name">
              <v-text-field label="Company Name" class="mr-4 rounded-lg" outlined placeholder="Company Name">
              </v-text-field>
            </VP>
            <VP rules="required|numeric" v-slot="{ errors }" name="website">
              <v-text-field label="Website (opt)" class="rounded-lg" outlined placeholder="Website (opt)">
              </v-text-field>
            </VP>
          </div>
          <div class="d-flex primary--text">
            <VP rules="required|numeric" v-slot="{ errors }" name="Email">
              <v-text-field label="Email" class="mr-4 rounded-lg" outlined placeholder="Email">
              </v-text-field>
            </VP>
            <VP rules="required|numeric" v-slot="{ errors }" name="Phone">
              <v-text-field label="Phone" class="rounded-lg" outlined placeholder="Phone">
              </v-text-field>
            </VP>
          </div>
          <div class="d-flex">
            <VP rules="required|numeric" v-slot="{ errors }" name="country">
              <v-text-field label="country" class="mr-4 rounded-lg" outlined placeholder="country">
              </v-text-field>
            </VP>
            <VP rules="required|numeric" v-slot="{ errors }" name="your title">
              <v-text-field label="Your Title" class="rounded-lg" outlined placeholder="Your Title">
              </v-text-field>
            </VP>
          </div>
          <VP rules="required" v-slot="{ errors }" name="volume">
            <v-text-field label="Projected Online Volume" class="rounded-lg" outlined placeholder="Projected Online Volume"></v-text-field>
          </VP>
          <VP rules="required" v-slot="{ errors }" name="agree">
            <v-checkbox>
              <template v-slot:label>
                <v-card-subtitle class="primary--text">
                  I agree that ZuumPay may contact me<br>
                  in the above email address or phone<br>
                  listed above.
                </v-card-subtitle>
              </template>
            </v-checkbox>
          </VP>
        </VO>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="onPrimary--text pa-4">continue</v-btn>
      </v-card-actions> 
    </v-card> -->
    <!--withdraw step 2 dialog-->
    <v-dialog persistent v-model="approveDialog" width="300">
      <v-card outlined class="d-flex form flex-column align-center rounded-lg justify-space-around text-center" height="220">
        <v-card-text class="primary--text font-weight-bold">
          You are about to withdraw<br>
          10,000 xaf from your acount.<br>
          Enter PIN to approve.
        </v-card-text>
        <v-card-text style="width: 200px;">
          <VO ref="observer" tab="form">
            <VP rules="required" v-slot="{ errors }" name="pin">
              <v-text-field  label="****" dense
                class="rounded-md" outlined placeholder="****"
              ></v-text-field>
            </VP>
          </VO>
          <v-btn color="primary" @click="approveDialog = false,WithdrawDialog=false" class="onPrimary--text pa-4">
            approve
          </v-btn>
        </v-card-text>
     
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
        approveDialog:false
      }
    },
    computed: {
      WithdrawDialog: {
        get() { return this.value },
        set(val) { this.$emit('input', val) }
      }
    }  
  }
</script>

<style scoped lang="scss">
  body {
    .form { 
      background: linear-gradient(45deg, #bcbfd4 , #cccee0 );
      .v-input__control > .v-input__slot fieldset {
        background: linear-gradient(45deg,#f2f3fd,#c2ceeb) !important;
        border: none;
      }
    }
    /* .approveForm {
      background: linear-gradient(45deg, #bcbfd4 , #cccee0 );
      .v-input .v-input__control > .v-input__slot {
        background:red !important;
        /* opacity: .9; */
        /* border: none;
      }
    } */ 
    .v-label{
      color: #4652B0 !important;
    }
  }
</style>