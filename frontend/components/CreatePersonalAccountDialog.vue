<template>
  <!-- Create Personal Account -->
  <v-main>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <div style="background-color: white;">
        <v-img src="../logo.png" to="/" width="120" class="mx-auto" contain/>
      </div>
      <div style="background-color: white;height: 20px;"></div>
      <v-card class="d-flex flex-column align-center">
        <v-card class="rounded-0" style="width: 100%" elevation="12">
          <v-card-title class="onPrimary--text type d-flex justify-center" style="background:#4652B0;padding:24px;" >
            <v-icon color="onPrimary" class="mr-4">mdi-account</v-icon>
              Create Personal Account
          </v-card-title>
        </v-card> 
        <v-card-text class="signUp">
          <VO ref="observer" tag="form" id="CreateAccount">
            <VP rules="required" v-slot="{ errors }" name="Full Name">
              <v-text-field 
                label="Full name"
                type="text" 
                v-model="credential.fullName"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="gender">
              <v-select 
                v-model="credential.gender" 
                :items="genders" 
                label="gender"
                :error-messages="errors"
              ></v-select>
            </VP>
            <VP rules="required|email" v-slot="{ errors }" name="email">
              <v-text-field 
                label="Email" 
                type="email"
                v-model="credential.email"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required|numeric|min:4|max:15" v-slot="{ errors }" name="phoneNumber">
              <v-text-field
                type="tel" 
                v-model="credential.phone"
                :error-messages="errors"
                label="phone number"
              >
                <template v-slot:prepend>
                  <img width="24" contain :src="credential.countryCode">
                  <span slot="append" class="ml-4"> {{credential.country_calling_code}}</span>
                </template>
              </v-text-field>
            </VP>
            <VP rules="required|min:5|max:5" v-slot="{ errors }" name="pin">
              <v-text-field
                type="text" 
                v-model="credential.pin"
                :error-messages="errors"
                label="enter pin"
              >
              </v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="zuumpayId">
                <v-text-field
                  label="input zuumpayId id"
                  value="z_simo"
                  v-model="credential.zuumpayId"
                  :error-messages="errors"
                  hint="example z_simo"
                  type="text"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="date Of Birth">
              <v-text-field 
                label="date Of Birth"
                type="date"
                v-model="credential.dateOfBirth"
                :error-messages="errors"
                ></v-text-field>
            </VP> 
            <VP rules="required" v-slot="{ errors }" name="address">
              <v-text-field 
                label="address"
                type="text"
                v-model="credential.address"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required|numeric" v-slot="{ errors }" name="zip Code">
              <v-text-field 
                label="zip Code"
                type="number" 
                v-model="credential.zipCode"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="accountNumber">
              <v-text-field 
                label="account Number"
                type="text" 
                v-model="credential.accountNumber"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required|confirmed:confirmation|max:12|min:6" v-slot="{ errors }" name="password">
              <v-text-field 
                label="Password"
                type="password"
                v-model="credential.password"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP vid="confirmation" v-slot="{ errors }" name="Confirm Password">
              <v-text-field
                label="Confirm Password"
                type="password"
                v-model="credential.confirmation"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="country">
              <v-text-field
                label="country"
                type="text"
                filled
                readonly
                v-model="credential.country"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="currency">
              <v-text-field
                label="currency"
                type="text"
                filled
                readonly
                v-model="credential.currency"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="currency name">
              <v-text-field 
                label="currency name"
                type="text"
                filled
                readonly
                v-model="credential.currencyName"
                :error-messages="errors"
                ></v-text-field>
            </VP>
            <VP rules="size:300|required" v-slot="{ errors }" name="image Id" >
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an id image"
                prepend-icon="mdi-camera"
                label="Avatar"
                :error-messages ="errors"
                v-model="file"
                ></v-file-input>
                <v-img
                  height="200"
                  width="100%"
                  contain
                  :src="preview || '/avatar.png'" alt=""
                ></v-img> 
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions style="width: 100%;">
          <v-btn class="text-capitalize" color="error darken-1" text @click="dialog = false">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :loading="loading" class="text-capitalize px-8 rounded-0" @click="signUpStepOne()" id="signUp">Create Account</v-btn>
        </v-card-actions>
      </v-card>
      <div id="recaptcha-container">
      </div>
    </v-dialog>
    <!-- <phone-verification-dialog v-model="PhoneVerificationDialog"/> -->
    <v-dialog v-model="dialogPhoneVerification" persistent max-width="400px">
      <v-card>
        <v-card-title class="text-center secondary--text">
          Enter the 6-digit code you receive via SMS to verify your phone number.
        </v-card-title>
        <v-card-text>
           <VO ref="observer" tag="form" id="phoneVerification">
            <VP rules="required|number" v-slot="{ errors }" name="phoneNumber">
              <v-text-field
                v-model="codeVerificationPhone"
                label="code phone verification"
                type="number"
                :error-messages="errors"
              ></v-text-field>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="error darken-1" text @click="dialogPhoneVerification = false">Close</v-btn>
          <v-btn color="primary" :loading="loading" @click="signUpStepTwo()">Send Code</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-dialog v-model="message" persistent max-width="fit-content">
        <v-card class="text-center">
          <v-card-title class="text-h5 info--text">
            {{text}}
          </v-card-title>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn color="error" text @click="message = false">
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-main>
  
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  layout:"auth",
  data() {
    return {
      loading:false,
      message:false,
      text:'',
      credential: {
        zuumpayId:'',
        pin:'',
        fullName:'',
        email:'',
        phone:"",
        country:'',
        countryCode:'',
        currency: '',
        currencyName:'',
        address: '',
        zipCode: '',
        dateOfBirth: '',
        gender:'',
        imageId: '',
        userId:'',
        date:'',
        accountBalance:0,
        accountNumber: '',
        country_calling_code:'',
        role:"client",
      },
      codeVerificationPhone:'',
      dialogPhoneVerification:false,
      file:null,
      genders: ["Male","Female"],
      recaptchaVerifier:'',
      confirmationResult:''
    }
  },
  computed: {
    dialog: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    }
  },
  mounted() {
    this.getUserLocation()
  },
  methods: {
    signUpStepOne() {
      this.signUpStep1()
    },
    signUpStepTwo() {
      this.signUpStep2()
    }
  }
}
</script>

<style lang="scss">
  body {
    .signUp {
      .v-input__slot:before {
        border-color: #4652B0 !important;
      }
      input,.mdi-camera  {
        color: #4652B0 !important;
      }
    }
    .verification {
      .v-input__slot:before {
        border-color: #4652B0 !important;
      }
    }
    @media (max-width:"370px") {
      .type {
        font-size: 15px;
      }
    }
  }
</style>