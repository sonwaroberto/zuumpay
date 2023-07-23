<template>
  <v-main>
    <div class="d-flex flex-column align-center align-md-start mt-16 mt-md-0">
      <v-card class="signIn text-md-right text-center" elevation="0" style="position:relative;" color="transparent" :width="$vuetify.breakpoint.mdAndDown ? '80%' : '100%'">
        <v-layout row wrap>
          <v-flex xs12 sm10 t-3 class="d-flex align-center" style="height:100vh">
            <div class="flex-grow-1 mt-12">
              <v-img src="../logo.png" to="/" width="120" class="mx-auto" contain/>
              <v-card class="mt-16 d-flex flex-column align-center">
                <v-card class="d-flex justify-center rounded-0" elevation="12" style="width: fit-content;position: relative;top: -32px;">
                  <v-card-title class="onPrimary--text" style="background:#4652B0;padding: 16px 100px;" >
                    <v-icon color="onPrimary" class="mr-4">mdi-login</v-icon>Login
                  </v-card-title>
                </v-card>
                <v-card-text>
                  <VO ref="observer" tag="form" id="signIn">
                    <VP rules="required|email" v-slot="{ errors }" name="Email">
                      <v-text-field
                        v-model="credential.email"
                        label="Email"
                        type="email"
                        :error-messages="errors"
                        prepend-icon="mdi-email"
                      ></v-text-field>
                    </VP>
                    <VP rules="required|min:6" v-slot="{ errors }" name="Password">
                      <v-text-field
                        v-model="credential.password"
                        label="Password"
                        type="password"
                        :error-messages="errors"
                        prepend-icon="mdi-lock"
                        color="primary"
                      ></v-text-field>
                    </VP>
                    <v-card-actions class="d-flex align-center justify-center" style="padding:0 !important">
                      <v-btn color="primary" class="mt-2 px-8 rounded-0" :loading="loading" @click="signIn()">LogIn</v-btn>
                    </v-card-actions>
                    <v-divider class="my-4"></v-divider>
                    Not a member?<v-btn color="secondary" class="text-capitalize" @click="CreateAccount = true" text>Sign Up</v-btn>
                    <br>
                    Forgot<v-btn color="secondary" class="text-capitalize" @click="ResetDialog = true" text>Password ?</v-btn>
                  </VO>
                </v-card-text>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-dialog v-model="emailVerifiedDialog" width="400">
        <v-card class="text-center" color="accent" dark>
          <v-card-title class="font-weight-thin">
            <h4>{{textAccountVerified}}</h4>
          </v-card-title>
          <v-card-actions>
             <v-btn color="info" @click="sendVerification()" small> Send Mail Verification Again...</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="warning" @click="emailVerifiedDialog = false" small> close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="CreateAccount" width="fit-content">
        <v-card class="text-center" dark>
          <v-card-title class="font-weight-thin">
            <v-list class="d-flex flex-column align-start" style="width: 100%;">
              <v-list-item style="width: 100%;">   
                <v-list-item-content class="pa-0" style="width: 100%;">
                  <v-btn class="rounded-0 text-capitalize" @click="CreatePersonalAccountDialog = true,CreateAccount=false"  text>
                    Personal Account
                  </v-btn>
                  <v-btn class="rounded-0 text-capitalize" @click="CreateAgentAccountDialog = true,CreateAccount=false" text>
                    Agent Account
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-title>
          <v-card-actions>
            <v-spacer/>
            <v-btn color="warning" @click="CreateAccount = false" small text> close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <create-personal-account-dialog v-model="CreatePersonalAccountDialog"/>
      <create-agent-account-dialog v-model="CreateAgentAccountDialog"/>
      <reset-dialog v-model="ResetDialog"/>
    </div>
    <footer-component/>
  </v-main>
</template>
  
<script>
export default {
  name: "App",
  layout: "guest",
  data() {
    return {
      loading: false,
      CreateDialog: false,
      CreatePersonalAccountDialog: false,
      CreateAgentAccountDialog: false,
      ResetDialog:false,
      CreateAccount:false,
      form:'',
      credential: {
        email: '',
        password: '',
      },
      emailVerifiedDialog:false,
      textAccountVerified:'Account Not Yet Verified...',
    }
  },
  methods : { 
    async signIn() {    
      const valid = await this.$refs.observer.validate()
      if (!valid) return
      this.loading = true
      const signInForm = document.querySelector("#signIn")
      this.form = signInForm
      this.$fire.auth.signInWithEmailAndPassword( this.credential.email , this.credential.password ).then( async (user) => {
        await this.saveIdToken()
        signInForm.reset() 
      })
      .catch( (e) => {
        console.log(e)
         if ( e.code == "auth/wrong-password" || e.code == "auth/user-not-found" ) {
          this.$refs.observer.errors.Email.push('Email or password was incorrect.')
          this.$refs.observer.errors.Password.push('Email or password was incorrect.')
        } else if(e.code == "auth/network-request-failed") {
          this.$refs.observer.errors.Email.push("A network error (such as timeout, interrupted connection or unreachable host) has occurred")
        }
      })
      .finally(() => {
        this.loading = false
        let user = this.$fire.auth.currentUser
        if(!user) {
          console.log("no user")
        }
        if(user){
          if(user.emailVerified == false) {
            // this.emailVerifiedDialog = true
          }
        }
      })
    },
    async sendVerification() {
      await this.sendMailVerification()
      await this.logOut()
      this.emailVerifiedDialog = false
    }
  }
}
</script>

<style lang="scss">
  body {
    .signIn {
      .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
        border-color: #4652B0 !important;
      }
    }
  }
</style>