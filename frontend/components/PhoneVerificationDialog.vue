<template>
  <!-- dialog phone verification -->
  <v-dialog v-model="dialogPhoneVerification" persistent max-width="400px">
    <v-card class="verification">
      <v-card-title class="secondary--text text-center">
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
            {{codeVerificationPhone}}
          </VP>
        </VO>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn  color="error darken-1" text @click="dialogPhoneVerification = false">Close</v-btn>
        <v-btn color="primary"  @click="signUpStepTwo()">Send Code</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    dialogPhoneVerification: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    }
  },
  methods: {
    signUpStepTwo() {
      this.signUpStep2()
    },
  }
}
</script>