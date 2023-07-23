<template>
  <v-container class="d-flex align-center flex-column"> 
    <v-card color="#e8e4fc" class="d-flex flex-md-row align-center flex-column rounded-xl"
      width="100%" elevation="0">
      <v-card color="transparent" class="ml-4 d-flex align-center flex-column align-md-start methods"
       style="height: 350px;" elevation="0">
        <div class="logo">
          <v-img src="../Logo_alt_dark_v04-3.png" width="150"></v-img>
        </div>
        <v-app-bar class="menu" color="transparent" :elevation="0">
          <v-tabs class="method">
            <v-tab @click="active(),cardMethod=true">
              <v-icon color="primary">mdi-credit-card-outline</v-icon> 
              <span>Card</span> 
            </v-tab>
            <v-tab @click="active(),mobileMoneyMethod=true">
              <v-icon color="primary">mdi-cellphone-sound</v-icon>
              <span>Mobile Money</span> 
            </v-tab>
            <v-tab @click="active(),crytoMethod=true">
              <v-icon color="primary">mdi-bitcoin</v-icon> 
              <span>Crypto</span> 
            </v-tab>
            <v-tab @click="active(),walletMehod=true">
              <v-icon color="primary">mdi-wallet</v-icon> 
              <span>Wallet</span> 
            </v-tab>
          </v-tabs>
        </v-app-bar>
      </v-card>
      <v-card class="checkOutCard" color="transparent" v-if="cardMethod" elevation="0">
        <v-card-text>
          <VO ref="observer" tab="form">
            <VP rules="required|numeric" v-slot="{ errors }" name="Card number">
              <v-text-field label="Card Number" class="rounded-xl" outlined placeholder="Card Number">
              </v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Name on card">
              <v-text-field label="Name on Card" class="rounded-xl" outlined 
                placeholder="Name on Card">
              </v-text-field>
            </VP>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Exp">
                <v-text-field label="Exp" class="mr-4 rounded-xl" outlined placeholder="Exp">
                </v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="cvv">
                <v-text-field label="cvv" class="rounded-xl" outlined placeholder="cvv">
                </v-text-field>
              </VP>
            </div>
            <div class="d-flex primary--text">
              <VP rules="required" v-slot="{ errors }" name="City">
                <v-text-field label="City" class="mr-4 rounded-xl" outlined placeholder="City">
                </v-text-field>
              </VP>
              <VP rules="required|numeric" v-slot="{ errors }" name="Street">
                <v-text-field label="Street" class="rounded-xl" outlined placeholder="Street">
                </v-text-field>
              </VP>
            </div>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Address">
                <v-text-field label="Address" class="mr-4 rounded-xl" outlined placeholder="Address">
                </v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Zip Code">
                <v-text-field label="Zip Code" class="rounded-xl" outlined placeholder="Zip Code">
                </v-text-field>
              </VP>
            </div>
            <VP rules="required" v-slot="{ errors }" name="agree">
              <v-radio class="checkbox d-flex justify-center justify-md-start">
                <template v-slot:label>
                  <v-card-subtitle class="primary--text">
                    save to my profile
                  </v-card-subtitle>
                </template>
              </v-radio>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" class="onPrimary--text pa-4">continue</v-btn>
        </v-card-actions> 
      </v-card>
      <v-card class="checkOutCard" color="transparent" v-if="mobileMoneyMethod" elevation="0">
        <v-card-text>
          <VO ref="observer" tab="form">
            <VP rules="required|numeric" v-slot="{ errors }" name="mobile money number">
              <v-text-field label="Mobile Money Number" class="rounded-xl" outlined placeholder="Mobile Money Number">
              </v-text-field>
            </VP>
            <VP rules="required" v-slot="{ errors }" name="Name">
              <v-text-field label="Name mobile money " class="rounded-xl" outlined 
                placeholder="name mobile money">
              </v-text-field>
            </VP>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Exp">
                <v-text-field label="Exp" class="mr-4 rounded-xl" outlined placeholder="Exp">
                </v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="cvv">
                <v-text-field label="cvv" class="rounded-xl" outlined placeholder="cvv">
                </v-text-field>
              </VP>
            </div>
            <div class="d-flex primary--text">
              <VP rules="required" v-slot="{ errors }" name="City">
                <v-text-field label="City" class="mr-4 rounded-xl" outlined placeholder="City">
                </v-text-field>
              </VP>
              <VP rules="required|numeric" v-slot="{ errors }" name="Street">
                <v-text-field label="Street" class="rounded-xl" outlined placeholder="Street">
                </v-text-field>
              </VP>
            </div>
            <div class="d-flex">
              <VP rules="required" v-slot="{ errors }" name="Address">
                <v-text-field label="Address" class="mr-4 rounded-xl" outlined placeholder="Address">
                </v-text-field>
              </VP>
              <VP rules="required" v-slot="{ errors }" name="Zip Code">
                <v-text-field label="Zip Code" class="rounded-xl" outlined placeholder="Zip Code">
                </v-text-field>
              </VP>
            </div>
            <VP rules="required" v-slot="{ errors }" name="agree">
              <v-radio class="checkbox d-flex justify-center justify-md-start">
                <template v-slot:label>
                  <v-card-subtitle class="primary--text">
                    save to my profile
                  </v-card-subtitle>
                </template>
              </v-radio>
            </VP>
          </VO>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" class="onPrimary--text pa-4">continue</v-btn>
        </v-card-actions> 
      </v-card>
      <v-card v-if="card" color="rgba(70, 82, 176,.05)" class="orderCard flex-grow-1" 
        elevation="0" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
        <v-simple-table class="primary--text d-flex flex-column" style="background-color: transparent;">
          <template v-slot:default>
            <thead>
              <v-card-text class="d-flex">
                <v-card-title class="mx-auto">Order Summary</v-card-title>
              </v-card-text>
            </thead>
            <tbody class="d-flex flex-column">
              <tr
                v-for="item in order"
                :key="item.name"
                class="onPrimary--text d-flex justify-space-between"
              >
                <td class="d-flex align-center">{{ item.name }}</td>
                <td class="d-flex align-center">{{ item.prices }}</td>
              </tr>
            </tbody>
            <v-card-text class="onPrimary--text d-flex justify-center" style="background:rgba(70, 82, 176,.7)" width="100%">
            <div>
              <v-card-subtitle>
                <span style="min-width: 100px;display: inline-block;">Sub-Total</span> <span>{{subTotal}}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span style="min-width: 100px;display: inline-block;">delevery</span> <span>{{delevery}}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span style="min-width: 100px;display: inline-block;">tip</span> <span>{{tip}}</span>
              </v-card-subtitle>
              <v-card-subtitle>
                <span style="min-width: 100px;display: inline-block;">Total</span> <span>{{total}}</span>
              </v-card-subtitle>
            </div>
            </v-card-text>
          </template>
        </v-simple-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name:'default',
    layout:"empty",
    created() {
      this.subTotal = this.order.reduce(function(tot, arr) { return tot + Number(arr.prices)},0)
      this.total = this.subTotal + this.tip + this.delevery
    },
    data() {
      return {
        subTotal:'',
        total:'',
        tip:250,
        delevery:400,
        card:true,
        order: [
          {
            name: 'Fried Rice',
            prices: "2300",
          },
          {
            name: 'Water',
            prices: "350",
          },
          {
            name: 'Juice',
            prices: "1000",
          },
          {
            name: 'Mayonnaise',
            prices: "200",
          },
        ],
        cardMethod:true,
        walletMethod:false,
        mobileMoneyMethod:false,
        crytoMethod:false,
      }
    },
    methods: {
      active(){
        this.cardMethod = false
        this.walletMethod = false
        this.mobileMoneyMethod = false
        this.crytoMethod = false
      }
    }
  }
</script>

<style lang="scss">
  body {
    @media (min-width:960px) {
      .methods {
        height:100vh !important;
      }
      .orderCard {
        position: relative;
        left: 24px;
      }
      .checkOutCard {
        margin-top: 84px;
      }
    }
    .menu .v-toolbar__content {
      height: auto !important;
    }
    .method {
      span {
        color: #4652B0;
        margin-left:26px
      }
      .v-slide-group__content {
        flex-direction: column !important;
        justify-content: space-between !important;
        .v-tabs-slider-wrapper {
          display: none;
        }
        .v-tab {
          min-height: 50px !important;
          border-radius: 16px;
          display: flex;
          justify-content: flex-start;
          width: 225px;
        }
        .v-tab--active::before {
          opacity: 0.12 !important;
          border-radius: 16px;
        }
      }
    }
    .checkOutCard {
      .v-label {
          color:#4652b0 !important;
        }
      fieldset {
        background-color: rgba(70, 82, 176,.12);
        border:none;
      }
      .v-radio {
        margin-top: -16px;
        input {
          display: none !important;
        }
        .mdi-radiobox-blank {
          color:#4652b0;
        }
      }
    }
    .orderCard {
      .v-data-table__wrapper {
        border-radius: 24px;
      }
      tr:nth-child(odd),tr th {
        background-color: #4652b0b3 !important;
      }
      tr:nth-child(even) {
        color: #021291 !important;
      }
      .bgTable {
        background-color:#e8e4fc !important;
        font-weight: bold;
      }
      tr th span {
        font-weight: bold !important;
        font-size: 1rem;
        color: #602cb4;
      }
      .v-data-table__wrapper,.v-data-table {
        width: 100%;
      }
      .v-data-footer {
        .v-data-footer__select,.v-data-footer__pagination,.v-data-footer__icons-before,
          .v-data-footer__icons-after {
          display: none;
        }
      }
    }
  }
</style>