<template>
  <v-app>
    <v-app-bar color="transparent" app elevation="0" v-if="!authLoading">
      <v-container class="d-flex">
        <v-toolbar id="header" color="transparent" :elevation="0">
          <v-app-bar-nav-icon class="primary--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-items class="d-flex align-center">
            <div class="d-flex">
              <v-btn style="background: rgba(0, 0, 0, 0.12);" elevation="0" class="mr-4 primary--text" fab>
                <v-icon style="font-size:x-large;">mdi-cog</v-icon>
              </v-btn>
              <v-btn  style="background: rgba(0, 0, 0, 0.12);" elevation="0" class="mr-4 primary--text" fab>
                <v-icon style="font-size:x-large;">mdi-bell-badge</v-icon>
              </v-btn>
              <v-btn style="background: rgba(0, 0, 0, 0.12);" @click="logout()" elevation="0" class="primary--text" fab>
                <v-icon style="font-size:x-large;">mdi-logout</v-icon>
              </v-btn>
            </div>
          </v-toolbar-items>
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" v-if="!authLoading" app floating>
        <v-card class="d-flex flex-column align-center" elevation="0" style="background: rgba(0, 0, 0, 0.12);">
          <v-container>
            <v-app-bar-nav-icon style="align-self:flex-start" class="hidden-md-and-up primary--text" 
            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-container>
          <v-card-title>
            <router-link to="./">
            <v-img width="120" contain src="../logoDashboard.png"/>
          </router-link>
          </v-card-title>
          <v-card-text align="center">
            <v-badge color="#021291" overlap bottom class="badgePosition" icon="mdi-camera">
              <v-avatar size="100">
                <v-img :src="image || '/avatar.png'"></v-img>
              </v-avatar>
            </v-badge>
          </v-card-text> 
          <v-card-text class="primary--text" v-if="!authLoading && $store.state.account != null">
            <v-row align="center" class="flex-column mx-0">
              <span class="font-weight-bold">
                Hello {{$store.state.account.role}} {{$store.state.account.fullName}} 👋
              </span>
              <b class="font-weight-bold">
                {{$store.state.account.phone}}
              </b>
              <span style="font-size:x-small">
                Edit Profile
              </span>
            </v-row>
          </v-card-text>    
        </v-card>
        <v-list style="background: rgba(0, 0, 0, 0.12);">
          <v-list-item style="width: 90%;" v-for="clientMenu in clientMenus" :key="clientMenu.title" link :to="clientMenu.href">
            <v-list-item-icon>
              <v-icon class="primary--text mx-4">{{clientMenu.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="primary--text rounded-sm">{{ clientMenu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <nuxt v-if="!authLoading"/>
    <v-row v-else justify="center" align="center" style="height: 100vh;">
      <v-progress-circular  :size="70"  :width="7"  color="primary" indeterminate></v-progress-circular>
    </v-row>
  </v-app>
</template>

<script>
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0) {
      document.getElementById("header").style.top = "0";
    }
    if (currentScrollPos > 0) {
      document.getElementById("header").style.top = "-60px";
    } 
  }
export default {
  name: "auth",
  middleware: ['auth'],
  data() {
    return {
      drawer: true,
      clientMenus: [
        { title: 'Dashboard',href:"./dashboard", icon: 'mdi-home' },
        { title: 'Transfer',href:"./transfer", icon: 'mdi-transfer' },
        { title: 'Deposit', href:"./deposit", icon:'mdi-transfer'},
        { title: 'Payment',href:"./payment", icon: 'mdi-bank-transfer-out' },
        { title: 'Withdraw',href:"./withdraw", icon: 'mdi-account-cash' },
        { title: 'Loan',href:"./loan", icon: 'mdi-cash-100' },
        { title: 'Crypto',href:"./crypto", icon: 'mdi-bitcoin' },
        { title: 'Wallet',href:"./wallet", icon: 'mdi-wallet' },
        { title: 'Savings',href:"./saving", icon: 'mdi-cash-multiple' },
        { title: 'ZoomCard',href:"./zoomCard", icon: 'mdi-credit-card' }
      ],
      image:''
    }
  },
  async created() {
    this.$fire.auth.onAuthStateChanged(async user  => {
      const idToken = localStorage.getItem('idToken')
      const expires = localStorage.getItem('tokenExpires')
      if (user) {
          const { claims } = await user.getIdTokenResult()
          this.role = claims.role
          const account = await this.$fire.firestore.collection("accounts").doc(user.uid).get()
          this.image = account.data().imageId
          this.$store.commit('SET_ACCOUNT', {...account.data(), id: account.id})
          this.$store.commit('SET_USER', {uid: user.uid, email: user.email})
          if (idToken && expires) {
            const now = new Date().getTime()
            if (now < parseInt(expires)) 
              this.$store.commit('SET_TOKEN', idToken)
            else {
              localStorage.removeItem('idToken')
              localStorage.removeItem('tokenExpires')
              this.saveIdToken()
            }
          } else {
            this.saveIdToken()
          }
      } else {
        // user is not logged-in
        if (idToken && expires) {
          localStorage.removeItem('idToken')
          localStorage.removeItem('tokenExpires')
        }
      }
      this.$store.commit('SET_AUTH_LOADING', false)
    })
  },
  methods: {
    logout() { 
      this.logOut()
    },
  }
}
</script>

<style lang="scss">
body {
  .badgePosition{
    border: 3px solid #021291;
    border-radius: 50%;
    padding: 6px;
    span span{
      height: 34px;
      width: 34px;
      border-radius: 50%;
      inset: calc(100% - 30px) auto auto calc(100% - 32px) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      .mdi-camera {
        font-size: 16px;
      }
    }
  }
  .v-navigation-drawer {
    .v-list-item::before {
      border-radius: 16px;
      margin-left:16px;
    }
  }
  ::-webkit-scrollbar {
    width : 5px;
  }
  ::-webkit-scrollbar-track {
    width: 9px;
    padding: 0px 2px;
   background: rgba(0, 0, 0, 0.12)
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.12);
    border-radius: 3px;
  }
  .v-input__append-inner {
    margin: 0 !important;
  }
  /* .v-input__slot:before {
    border: 0 !important;
  }
  .v-input__slot:after {
    border: 0 !important;
  } */
  .v-select__selections input {
    display: none;
  }
  .v-select__selection,.v-input__icon--append .notranslate {
    color: #4652B0;
  }
  fieldset {
    border: 1px solid #4652B0 !important;
  }
}
</style>