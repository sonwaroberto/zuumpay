<template>
  <v-main class="d-flex align-center rec">
    <v-container style="min-height: 100vh;" class="flexColumn align-center justify-md-space-between flex-md-row justify-center text-md-left text-center">
      <v-card outlined color="transparent" class="flexColumn align-md-start primary--text" width="100%">
        <v-card-title style="word-break: break-word;">
          Secured payment gateway<br>
          in one click!
        </v-card-title>
        <br class="d-none space">
        <v-card-subtitle class="primary--text" style="word-break: break-word;">
          <br>Reach more buyers and drive higher conversion with<br>
          advance paument infrastructure for seamless global payments,<br>
          money management for everyone and easy integration.
        </v-card-subtitle>
        <v-card-text>
          <v-btn outlined class="primary--text" style="border: 1px solid #4652B0">
            get started
          </v-btn>
        </v-card-text>
      </v-card>
      <div style="position:relative;width:100%" class="d-flex justify-center align-center">
        <v-img contain :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '625px'" src="../laptop mockup.png">
       
        </v-img>
        <div class="phone" style="position:absolute;top:0px;right:130px">
          <v-img contain max-width="300" src="../phones.png"></v-img>
        </div>
      </div>
    </v-container>
    <v-container style="min-height: 100vh;" class="flexColumn align-md-start flex-md-row
      justify-md-space-between text-md-left text-center">
      <v-card outlined color="transparent" class="flexColumn align-md-start primary--text">
        <v-card-subtitle class="text-uppercase primary--text font-weight-bold" style="font-family:Verdana">
          unified ecosystem
        </v-card-subtitle>
        <v-card-title class="font-weight-bold" style="word-break: break-word;font-weight:Montserrat">
          A blended infrastructure of payment<br>
          and financial products
        </v-card-title>
        <br class="d-none space">
        <v-card-subtitle class="primary--text" style="font-weight:Montserrat">
          Reach more customers and get paid from anyone<br>
          anyway you want with no hassle from major credit cards,<br>
          mobile, wallets, and cryptos globally.  
        </v-card-subtitle>
        <v-card-subtitle class="primary--text">
          No long procedures, no middlemen, ZuumPay<br>
          processes direct payments from your customers to <br>
          you in seconds with instant withdrawal options.
        </v-card-subtitle>
      </v-card>
      <v-card :height="$vuetify.breakpoint.mdAndUp ? '100vh' : 'auto'" elevation="0" color="transparent" style="position:relative"  class="d-flex align-md-center align-center">
        <div>
          <v-img contain class="undrawPay" width="300" src="../undraw_pay_online_b-1-hk (1).png" style="z-index:2"></v-img>
            <div class="undrawProfile" style="position:absolute;z-index:1;top:0px;left:110px">
              <v-img contain src="../undraw_profile_data_re_v81r.png" style="z-index:1" width="200"></v-img>
            </div>
            <div class="undrawOnline" style="position:absolute;top:0px;left:-11px">
              <v-img contain src="../undraw_online_transactions_-02-ka.png" style="z-index:1" width="120"></v-img>
            </div>
        </div>
      </v-card>
    </v-container>
    <v-container style="min-height: 100vh;" class="flexColumn flex-md-row align-md-start justify-md-space-between
      justify-center text-md-right text-center">
      <v-card :height="$vuetify.breakpoint.mdAndUp ? '100vh' : 'auto'" elevation="0" color="transparent" style="position:relative"  class="d-flex align-md-center align-center">
        <v-img contain width="320" class="credit" src="../undraw_credit_card_payment_re_o911.png"></v-img>
      </v-card>
      <v-card outlined color="transparent" class="flexColumn align-md-end primary--text">
        <v-card-title style="word-break: break-word;">
          Merchant services for any industry.
        </v-card-title>
        <br class="d-none space">
        <v-card-subtitle class="primary--text">
          <br>Whether you're running a bar, bridal shop, boat dealership,<br>
          restaurant,shopping mall,freelancer or any other small business,<br>
          we can help you save money and grow your business processing<br>
          payments globally.<br><br>
          Plus, our expert in-house support team is availabe 24/7.
        </v-card-subtitle>
      </v-card>
    </v-container>
    <section style="min-height: 100vh;background-color:#4652B0;" class="d-flex align-center">
      <div class="d-flex flex-column align-center">
        <v-card color="transparent" class="text-center flexColumn" dark :elevation="0">
          <v-card-title style="word-break: break-word;">
            A full suite of payment solutions
          </v-card-title>
          <br class="d-none space">
          <v-card-subtitle>
            <br>With a single integaion, our team will enable you process<br>
            payments from multiple options for every business venture<br>
            including high risk transactions.
          </v-card-subtitle>
        </v-card>
        <div class="d-flex flex-wrap justify-center">
        <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../Zoompay.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 13.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>ZUUMPAY</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../mobilemoney.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 14.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>MOBILE MONEY</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../mastercard.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 15.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>BANK CARDS</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../walllet.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 16.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>WALLETS</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../mobilemoney.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 17.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>MOBILE PAYMENT</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../pointOfSale.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 18.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>POS</v-card-title>
          </div>
        </v-card>
         <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../mobilemoney.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 19.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>INTEGRATED PAYMENT</v-card-title>
          </div>
        </v-card>
        <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../Money.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 20.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>ZUUMPAY CAPITAL</v-card-title>
          </div>
        </v-card>
        <v-card width="230" height="200" color="rgba(255,255,255,0.15)" dark class="flexColumn align-md-start justify-end rounded-xl ma-4" elevation="0">
          <v-img src="../bitcoins.png" contain width="130"  style="position:absolute;top: -40px;right:15px;"/>
          <v-img src="../Mask Group 21.png" contain width="250"  style="position:absolute;top: 0;right:0;"/>
          <div>
            <v-card-title>CRYPTO</v-card-title>
          </div>
        </v-card>
        </div>
      </div>
    </section>
    <section style="min-height:100vh" class="d-flex flex-column align-md-start fly">
      <v-container class="flexColumn align-md-start flex-md-row justify-md-space-between justify-center text-md-left text-center">
        <v-card color="transparent" dark :elevation="0" style="min-width:fit-content" class="flexColumn align-md-start">
          <v-card-title style="word-break: break-word;">
            Why choose ZuumPay as your <br>
            strategic development partner?
          </v-card-title>
          <br class="d-none space">
          <v-card-subtitle>
            <br>Being a privately held company, our focus is always going to be on creating<br>
            long-term relationships and creating products to enhance your earnings<br>
            and increase your market reach, and not on squeezing our partners in order<br>
            to maximize our quarterly earnings.
          </v-card-subtitle>
          <v-card-text>
            <v-btn class="onPrimary--text" style="border: 1px solid white;" outlined> order card</v-btn>
          </v-card-text>
        </v-card>
        <!-- <div style="flex-grow:1"></div> -->
        <v-card :height="$vuetify.breakpoint.mdAndUp ? '100vh' : 'auto'" elevation="0" color="transparent" style="position:relative;"  class="d-flex align-md-center justify-center align-center">
          <div style="width:100%">
            <v-img max-width="100%" height="250" style="position:relative"  src="../Path 307.png">
            <v-img contain width="300"  style="position:relative;top:10px;right:15px" src="../undraw_programming_re_kg9v.png"></v-img>
          </v-img>
          </div>
        </v-card>
      </v-container>
      <div class="d-flex flex-column align-center justify-center" style="width:100%">
         <v-card color="transparent" dark :elevation="0" style="overflow:hidden" max-width="100%" width="100%" class="flexColumn justify-center">
        <v-card-title style="word-break: break-word;">
          Payments Methods
        </v-card-title>
        <br class="d-none space">
        <v-card-subtitle>
          view full documentation
        </v-card-subtitle>
        <div style="position:absolute;bottom:50px" >
          <v-img contain width="100%" height="280" src="../Path 409.png"></v-img>
        </div>
        <div class="d-flex align-center justify-center flex-wrap">
          <v-img contain max-width="150" src="../Group 134.png"></v-img>
          <v-img contain max-width="150" src="../Group 141.png"></v-img>
          <v-img contain max-width="150" src="../Group 139.png"></v-img>
        </div>
        <div class="d-flex align-center justify-center flex-wrap">
          <v-img contain max-width="150" src="../Group 135.png"></v-img>
          <v-img contain max-width="150" src="../Group 136.png"></v-img>
          <v-img contain max-width="150" src="../Group 137.png"></v-img>
          <v-img contain max-width="150" src="../Group 138.png"></v-img>
        </div>
        <br>
      </v-card>
      </div>
    </section>
    <section style="min-height: 100vh" class="bgGradient d-flex align-center">
      <v-container class="flexColumn flex-md-row justify-md-space-between text-md-left text-center">
        <v-card  :height="$vuetify.breakpoint.smAndDown ? '100%' : '80Vh'" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'" outlined style="flex-grow:1" color="transparent" class="pricing secondary--text d-flex justify-center flex-column">
          <v-card-title style="word-break: break-word;">
            Ready to accept the most popular<br>
            ways of payments ?
          </v-card-title>
          <br class="d-none space">
          <v-card-text class="secondary--text">
            Write our sales team and join<br>
            The shortlist
          </v-card-text>
        </v-card>
        <v-card width="500" height="width=100%" dark class="form flexColumn rounded-xl justify-space-around mt-0" > 
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
        </v-card>
      </v-container>
    </section>
    <section style="min-height:100vh;background-color: #eee;" class="d-flex align-center">
      <v-container class="d-flex align-start">
        <v-data-table
          :headers="headers"
          :items="TableElement"
          :items-per-page="5"
          :elevation="0"
          class="flexColumn rounded-xl bgTable primary--text"
          style="width: 100% !important;"
        >
          <template v-slot:top>
            <v-toolbar flat color="transparent"> 
              <v-toolbar-title class="primary--text">Developer Footer</v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-container>
    </section>
    <footer-component/>
  </v-main>
</template>

<script>
export default {
  name: "App",
  layout:'guest',
  data() {
    return {
      headers: [
          {text:"About",align: 'start',value: 'about'},
          {text:"Contact Sales",value: 'contact' },
          {text:"Faq",value: 'faq' },
        ],
        TableElement: [
          {
            about: 'API',
            contact: "Sandbox",
            faq:'Carrers'
          },
          {
            about: 'DEVELOPER DOCS',
            contact: "Pricing"
          },
          {
            about: 'ALL PAYMENTS METHODS',
            contact: "Blog"
          },  
        ],
      
    }
  }
}
</script>

<style lang="scss">
  body {
    .fly {
      background: url('../static/Rectangle 14.png') no-repeat center center; 
      background-size: cover !important;
    }
    .pricing { 
      background:linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('../static/pricing-wave.png') no-repeat 50% 50%;
      background-size: cover !important;
    }
    @media (min-width:540) {
      .credit {
        width: 450px !important;
      }
    }
    @media (min-width:520px) {
      .undrawPay {
        width: 400px !important;
      }
      .undrawProfile {
        top:130px !important;
        left:110px !important;
        .v-image {
          width: 350px !important;
        }
      }
      .undrawOnline {
        top:160px !important;
        left:-20px !important;
        .v-image {
          width: 180px !important;
        }
      }
    }  
    @media (min-width:450px) {
      .phone {
        top:-40px !important;
        left:-100px !important;
        .v-image {
          max-width: 400px !important;
        }
      }
    }
    @media (min-width:600px) {
      .phone {
        top:15px !important;
        left: -27px !important;
      }
    }
    @media (min-width:680px) {
      .phone {
        top:45px !important;
        left:0px !important;
      }
    }
    @media (min-width: 780px) {
      .phone {
        top:80px !important;
        left:30px !important;
      }
    }
    @media (min-width: 960px){
      .phone {
        top:0px !important;
        left:-100px !important;
        .v-image {
          max-width: 500px !important;
        }
      }
    }
    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .v-data-table {
      background-color:#e8e4fc !important;
    }
    .v-data-table__wrapper {
      width: 100% !important;
    }
    .squareCard {
      width: 234px !important;
      height: 200px !important;
      display: flex;
      flex-direction: column;
      margin: 16px;
      justify-content: space-around;
      background: rgba(255,255,255,0.15) !important;
    }
    .rec {
      background: linear-gradient(45deg,rgba(232, 235, 255,15%),rgba(70, 82, 176,15%));
    }
    .bgGradient {
      background: linear-gradient(to bottom right, #f4f4f4, #ccccf3);
    }
    tr:nth-child(even),tr th {
      background-color: #d4d4f4 !important;
    }
    tr:nth-child(odd) {
      background-color:#e8e4fc !important;
    }
    tr td {
      color: #602cb4;
    }
    tr th {
      font-weight: bold !important;
      font-size: .8rem !important;
      color: #602cb4 !important;
    }
    td,th {
      padding:32px !important;
    }
    .form { 
      background-color: rgba(255,255,255,0.15) !important;
      .v-input__control > .v-input__slot fieldset {
        background: linear-gradient(45deg,#f2f3fd,#ced6ec) !important;
        border: none;
      }
      .v-label{
        color: #4652B0 !important;
      }
      .mdi-checkbox-blank-outline {
        color: #4652B0 !important;
      }
    }
  }
</style>