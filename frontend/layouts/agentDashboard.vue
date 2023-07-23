<template>
  <v-app>
    <v-app-bar color="transparent" app elevation="0" v-if="!authLoading">
      <v-container class="d-flex align-center agent">
        <v-toolbar id="header" color="transparent" :elevation="0">
          <v-app-bar-nav-icon class="primary--text"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-items  class="d-flex align-center">
            <div>
              <v-btn style="background: rgba(0, 0, 0, 0.12);" @click="logout()" elevation="0" class="primary--text" fab>
              <v-icon style="font-size:x-large;">mdi-logout</v-icon>
              </v-btn>
            </div>
          </v-toolbar-items>
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer style="min-height:100vh" v-if="!authLoading"  v-model="drawer" app floating>
        <v-card class="d-flex flex-column align-center" elevation="0" style="background: rgba(0, 0, 0, 0.12);">
          <v-container>
            <v-app-bar-nav-icon style="align-self:flex-start"  class="hidden-md-and-up primary--text" 
            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-container>
          <v-card-title class="primary--text">
            TFC VIP Buea
          </v-card-title>   
        <v-list color="transparent">
          <v-list-item v-for="agentMenu in agentMenus" :key="agentMenu.title" link :to="agentMenu.href">
            <v-list-item-icon>
              <v-img class="primary--text mx-4" contain width="20" :src="agentMenu.icon"></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="primary--text rounded-sm">{{ agentMenu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        </v-card>
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
      agentMenus: [
        { title: 'Overview',href:"./agentOverview/agentDashboard", icon: '../Path - chart-pie.png' },
        { title: 'Payment',href:"./payment", icon: '../Path - credit-card-outline.png' },
        { title: 'Payouts',href:"./payout", icon: '../Path - cash.png' },
        { title: 'Transactions',href:"./transaction", icon: '../Path - cash-100.png' },
        { title: 'Customer',href:"./customer", icon: '../Path - account-tie.png' },
        { title: 'Team',href:"./team", icon: '../Path - account-group-outline.png' },
        { title: 'Point of sale',href:"./pointSale", icon: '../Path - store.png' },
        { title: 'API',href:"./api", icon: '../Path - api.png' },
        { title: 'Documentation',href:"./documentation", icon: '../Path - xml.png' },
        { title: 'Webhook',href:"./webhook", icon: '../icons8-webhook.png' }
      ],
    }
  },
  async mounted() {
    this.$fire.auth.onAuthStateChanged(async user  => {
      const idToken = localStorage.getItem('idToken')
      const expires = localStorage.getItem('tokenExpires')
      if (user) {
          const { claims } = await user.getIdTokenResult()
          this.role = claims.role
          const account = await this.$fire.firestore.collection("accounts").doc(user.uid).get()
          this.image = account.data().image
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
  .agent {
    .theme--dark {
      .v-list-item--active::before {
        border-radius: 2%;
      }
      .v-list-item--active {
        padding: 0;
        span {
          color: white !important;
        }
      }
      .v-list-item__content {
        padding: 0;
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
}
</style>