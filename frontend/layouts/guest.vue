<template>
  <v-app>
    <v-app-bar absolute color="transparent" id="topToolbar" class="topToolbar" :elevation="0">
      <v-container>
        <v-toolbar dark color="transparent" dense :elevation="0">
          <v-app-bar-nav-icon color="secondary" @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
          <v-spacer />
          <router-link to="/">
            <v-avatar>
              <v-img src="../LogoZuumPay.png" />
            </v-avatar>
          </router-link>
          <span style="width:20px" class="d-none  d-lg-block"></span>
          <v-toolbar-items app class="hidden-md-and-down">
            <v-list-item v-for="menu in menus" :key="menu.title" link :to="menu.href">
              <template v-if="menu.title=== 'create account'">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-content class="d-flex" offset-y>
                      <v-btn v-bind="attrs" v-on="on" class="rounded-0 secondary--text text-capitalize" text>
                        <v-icon>mdi-account</v-icon>{{ menu.title }} <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </v-list-item-content>
                  </template>
                  <v-list class="d-flex flex-column align-start">
                    <v-list-item>
                      <v-list-item-content class="d-flex flex-column align-start d-flex flex-column">
                        <v-btn class="rounded-0 text-capitalize pa-4 primary--text" @click="CreatePersonalAccountDialog = true"
                          text>
                          Personal
                        </v-btn>
                        <v-btn class="rounded-0 text-capitalize pa-4  primary--text" @click="CreateAgentAccountDialog = true"
                          text>
                          Agent
                        </v-btn>
                      </v-list-item-content>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
              <template v-else-if="menu.title=== 'login'">
                <v-list-item-content class="d-flex">
                  <v-btn class="rounded-0 secondary--text text-capitalize" text>
                    <v-icon>mdi-login</v-icon>{{ menu.title }}
                  </v-btn>
                </v-list-item-content>
              </template>
              <v-list-item-content v-else>
                <v-btn class="rounded-0 secondary--text text-capitalize" text>
                  {{ menu.title }}
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-toolbar-items>
        </v-toolbar>
      </v-container>
      <v-navigation-drawer class="drawer" v-model="drawer" absolute temporary>
        <div class="d-flex">
          <v-spacer/>
          <v-btn icon @click.stop="drawer = !drawer"><v-icon>mdi-chevron-left</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <v-list nav class="d-flex flex-column align-start" dense>
          <v-list-item v-for="menu in menus" :key="menu.title" link :to="menu.href">    
            <template v-if="menu.title=== 'create account'">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-content class="d-flex" offset-y> 
                  <v-btn style="padding:0 32px !important" v-bind="attrs" v-on="on" class="rounded-0 secondary--text text-capitalize" text>
                    <v-icon>mdi-account</v-icon>{{ menu.title }} <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                  </v-list-item-content>
                </template>
                <v-list class="d-flex flex-column align-start">
                  <v-list-item>   
                    <v-list-item-content class="pa-0">
                      <v-btn class="rounded-0 text-capitalize primary--text" @click="CreatePersonalAccountDialog = true"  text>
                        Personal
                      </v-btn>
                      <v-btn class="rounded-0 text-capitalize primary--text" @click="CreateAgentAccountDialog = true" text>
                        Agent
                      </v-btn>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                </v-menu>
            </template>
            <template v-else-if="menu.title=== 'login'">
              <v-list-item-content class="d-flex"> 
                <v-btn style="padding:0 32px !important" class="rounded-0 secondary--text text-capitalize" text>
                  <v-icon>mdi-login</v-icon>{{ menu.title }}
                </v-btn>
              </v-list-item-content>
            </template>
            <v-list-item-content v-else>
              <v-btn style="padding:0 32px !important" class="rounded-0 secondary--text text-capitalize" text>
                {{ menu.title }}
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> 
    </v-app-bar>
    <nuxt />
    <create-personal-account-dialog v-model="CreatePersonalAccountDialog"/>
    <create-agent-account-dialog v-model="CreateAgentAccountDialog"/>
  </v-app>
</template>

<script>
  export default {
      name: "auth",
      middleware: ['guest'],
    data: () => ({
      drawer: false,
      CreatePersonalAccountDialog: false,
      CreateAgentAccountDialog: false,
      hideOnScroll:true,
      toggleMenu: false,
      dialog: false,
      menus: [
        { title: 'remittance',href:"/"},
        { title: 'global payments',href:"./globalPayment"},
        { title: 'micro loans',href:"./microLoans"},
        { title: "cryto exchange", href:"./cryptoExchange"},
        { title: "developer api", href:"./developerApi"},
        { title: "login", href:"./login"},
        { title: "create account"}
      ],
      items: [
        { title: 'Personal',href:"/" },
        { title: 'Agent',href:"/" },
      ]
    })
  }
</script>

<style lang="scss">
  body {
    .topToolbar {
      .v-toolbar {
        display: flex;
        .v-toolbar__content {
          display: flex;
          align-items: flex-start;
          flex-grow: 1;
          padding: 0 !important;
        }
   
         @media (min-width:1264px) {  
          .v-toolbar__content {
            flex-grow: 0 !important;
          }   
        }
      }
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
    .v-application a {
      color: #4652B0;
    }
    .drawer{
      height: 100vh !important;
      align-items: flex-start;
    }
    .v-toolbar__items {
      align-items: flex-start !important; 
    }
    .topToolbar {
      .v-overlay--active {
        min-height: 100vh;
      }
      .v-list-item {
        padding: 0 !important;
      }
    }
  }
 </style>

