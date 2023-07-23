<template>
  <VO ref="observer" tag="form" id="resetPassword">
    <VP rules="required" v-slot="{ errors }" name="full Name">
      <v-text-field
        v-model="credential.fullName"
        label="Full name"
        type="text"
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
          <img width="24" height="24"  :src="credential.countryCode">
          <v-icon class="ml-4"> {{credential.country_calling_code}}</v-icon>
        </template>
      </v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="address">
      <v-text-field 
        label="address"
        type="text"
        v-model="credential.address"
        :error-messages="errors"
        ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="zuumpay Id">
      <v-text-field
        v-model="credential.zuumpayId"
        label="Zuumpay Id"
        type="text"
        :error-messages="errors"
      ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="account number">
      <v-text-field
        v-model="credential.accountNumber"
        label="Account Number"
        type="text"
        :error-messages="errors"
      ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="pin">
      <v-text-field
        v-model="credential.pin"
        label="pin"
        type="text"
        :error-messages="errors"
      ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="date Of Birth">
      <v-text-field
        v-model="credential.dateOfBirth"
        label="date Of Birth"
        type="date"
        :error-messages="errors"
      ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="zip Code">
      <v-text-field
        v-model="credential.zipCode"
        label="Zip Code"
        type="text"
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
    <VP rules="required|email" v-slot="{ errors }" name="Email">
      <v-text-field
        v-model="credential.email"
        label="Email"
        type="email"
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
    <VP vid="confirmation" rules="required" v-slot="{ errors }" name="Confirm Password">
      <v-text-field
        label="Confirm Password"
        type="password"
        v-model="credential.confirmation"
        :error-messages="errors"
        ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="currency">
      <v-text-field
        label="currency"
        type="text"
        v-model="credential.currency"
        :error-messages="errors"
        ></v-text-field>
    </VP>
    <VP rules="required" v-slot="{ errors }" name="currency name">
      <v-text-field 
        label="currency name"
        type="text"
        v-model="credential.currencyName"
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
  </VO>
</template>

<script>
  export default {
    created() {
      this.getUserLocation()
    },
  }
</script>