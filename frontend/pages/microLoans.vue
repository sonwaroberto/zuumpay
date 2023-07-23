<template>
  <div>
    <v-main class="bg" style="max-width:100%;position:relative">
      <v-img src="../Rectangle 1403.png" width="590" contain class="img1"/>
      <v-img src="../Rectangle 1404.png" width="260" contain class="img2"></v-img>  
      <v-container style="min-height:100vh" class="d-flex flex-column justify-space-around">
        <v-card elevation="0" class="secondary--text d-flex flex-column text-md-left text-center mt-md-0 mt-8 align-center" color="transparent">
          <v-card-title class="font-weight-bold" style="word-break: break-word">
            ZuumPay micro loan services
          </v-card-title>
          <v-card-subtitle class="secondary--text font-weight-bold">
            How much money do you need ? 
          </v-card-subtitle>
        </v-card>
        <div style="position:relative">
          <div style="position:absolute;bottom: -60px;right: 180px;">
            <v-img src="../undraw_my_password_re_ydq7.png" contain width="120"></v-img>
          </div>
          <div style="position:absolute;bottom: -180px;right: 80px;">
            <v-img src="../Ellipse 123.png" contain width="351"></v-img>
          </div>
          <v-card flat color="transparent" class="background10 rounded-lg">
            <v-card-text>
              <v-row>
                <v-col class="pr-4 rounded-lg">
                  <v-slider v-model="slider1" class="align-center" :max="max1" :min="min1" hide-details>
                    <template v-slot:append>
                      <span style="width:100px;font-weight:1000" class="secondary--text ">$ {{slider1}}</span>
                    </template>
                    <template v-slot:prepend>
                      <span style="width:20px" class="d-sm-block d-none"></span>  <span class="secondary--text" style="font-weight:1000">Amount</span>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card flat color="transparent" class="background10 mt-4 rounded-lg">
            <v-card-text>
              <v-row>
                <v-col class="pr-4 rounded-lg">
                  <v-slider v-model="slider2" class="align-center" :max="max2" :min="min2" hide-details>
                    <template v-slot:append>
                      <span style="width: 80px;font-weight:1000" class="secondary--text"> {{slider2}} Months</span> 
                    </template>
                    <template v-slot:prepend>
                      <span style="width:20px" class="d-sm-block d-none"></span><span class="secondary--text" style="font-weight:1000">Months</span>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
        <v-card elevation="0" color="transparent" class="d-flex flex-column align-center">
          <v-card-actions>
            <v-btn color="primary" class="onPrimary--text pa-4">next</v-btn>
          </v-card-actions>
          <v-card-text class="primary--text" style="font-weight:1000;font-family: monospace;" align="center">
            PayDay Loan | Personal Loan | Business Loan
          </v-card-text>
        </v-card>
        <div style="position: absolute;bottom: 100px;right: 60px;">
          <v-img src="../Ellipse 3.png" contain width="77"></v-img>  
        </div>
      </v-container>
    </v-main>
    <section class="section-color flexColumn align-md-start justify-center">
      <v-container class="d-flex flex-lg-row flex-column">
        <v-card color="transparent" class="text-center text-md-left" dark :elevation="0">
          <div>
             <v-card-title>
              Get a loan of up to 1,000,000 ($2,000)<br>
              in 30 minutes.  
            </v-card-title>
            <v-card-text style="font-size:16px;word-spacing: 0.2em;line-height:1.2;" >
              Setup a ZuumPay micro loan account and get up<br>
              XAF 1,000,000 into your momo or bank account.<br>
              No collateral. No paper work.
            </v-card-text>
          </div>
          <br>
          <br>
          <div style="position:relative">
            <div class="ellipse" style="position:absolute;right: 230px;top: 127px;">
              <v-img src="../Ellipse 111.png" contain width="250"></v-img>
            </div>
            <v-img src="../undraw_windy_day_x-63-l.png" contain width="400"/>
          </div>
        </v-card>
        <div class="d-flex align-center flex-column flex-grow-1" style="position:relative;overflow: hidden;">
          <div>
             <v-img height="600" contain class="mx-auto congrats" style="transform:rotate(21deg)"
          max-width="300" src="../congratulation.png"/>
          <div class="path" style="z-index:1;max-width:100%;overflow: hidden;position: absolute;top:200px;">
             <v-img src="../path.png" contain width="100%"></v-img>
          </div>
          </div>
        </div> 
      </v-container>
    </section>
    <v-divider></v-divider>
    <section class="section-color d-flex align-center" style="overflow: hidden;">
      <v-container class="d-flex flex-column" style="z-index: 2;">
        <v-card color="transparent" class="text-center" dark :elevation="0">
          <h2 class="mt-4">Flexible and Quick micro-loans</h2>
          <v-card-subtitle style="font-size:16px">
            Be it for business or personal needs, <br>
            access instant collateral free loans at the lowest<br>
            market rates within 24hours with a 97.3% approval<br>
            rate only on ZuumPay micro loans with a 3.7% interest rate.
          </v-card-subtitle>
        </v-card>
        <div class="d-flex oval flex-wrap justify-center">
          <div>
            <v-card dark class="ovalCard rounded-circle" :elevation="0">
              <v-img src="../worldwide.png"/>
            </v-card>
            <b>TRAVEL</b>
          </div>
          <div>
            <v-card dark class="ovalCard rounded-circle" :elevation="0">
              <v-img src="../enterprice.png"/>
            </v-card>
            <b>STARTUP</b>
          </div>
          <div>
            <v-card dark class="ovalCard rounded-circle" :elevation="0">
              <v-img src="../house.png"/>
            </v-card>
            <b>RENT</b>
          </div>
            <div>
            <v-card dark class="ovalCard rounded-circle" :elevation="0">
              <v-img src="../shop.png"/>
            </v-card>
            <b>RESTAURANT</b>
          </div>
          <div>
            <v-card dark class="ovalCard rounded-circle" :elevation="0">
              <v-img src="../university.png"/>
            </v-card>
            <b>TUITION</b>
          </div>
        </div>
      </v-container>
    </section>
    <v-divider></v-divider>
    <section class="section-color d-flex align-center" style="overflow: hidden;">
      <v-container class="d-flex flex-column">
        <v-card color="transparent" class="text-center" dark :elevation="0">
          <h2 class="mt-4">Our Lending Services</h2>
          <v-card-subtitle>
            Where you are looking for extra money to boost or start your business, 
            or a personal assist for a holiday trip, <br>
            car mentanance et, ZuumPay loans enables you to secure the amount to 
            handle your immediate<br>
            needs and pay back later with little interests rates.phonezoom
          </v-card-subtitle>
        </v-card>
        <br>
        <div style="width:100%" class="d-flex flex-wrap justify-space-around">
          <v-card dark class="squareCard mt-lg-0 mt-4 rounded-lg" :elevation="0">
            <v-card-title class="secondary--text">Payday Loans</v-card-title>
           <div> <v-img src="../undraw_transfer_money_rywa.svg"/></div>
          </v-card>
          <v-card dark class="squareCard mt-lg-0 mt-4 rounded-lg" :elevation="0">
            <v-card-title class="secondary--text">Personal Loans</v-card-title>
            <div><v-img src="../undraw_personal_finance_tqcd.svg"/></div>
          </v-card>
          <v-card dark class="squareCard mt-lg-0 mt-4 rounded-lg" :elevation="0">
            <v-card-title class="secondary--text">Business Loans</v-card-title>
            <div><v-img src="../undraw_pay_online_b-1-hk.svg"/></div>
          </v-card>
        </div>
      </v-container>
    </section>
    <section class="bgLending">
      <v-container class="flexColumn">
        <v-card color="transparent" class="flexColumn text-center primary--text" :elevation="0">
          <v-card-title>
            Our Lending Services
          </v-card-title>
          <br class="d-none space">
          <v-card-subtitle class="primary--text">
            Where you are looking for extra money to boost or start your business, or a personal 
            assist for a holiday trip, <br>
            car mentanance et, ZuumPay loans enables you to secure the amount to handle your
            immediate<br>needs and pay back later with little interests rates.
          </v-card-subtitle>
        </v-card>
        <v-card color="transparent" :height="$vuetify.breakpoint.smAndDown ? '100%' : '500'"
          class="rounded-lg rectangleCard flex-lg-row justify-space-around">
          <v-card color="transparent" class="rounded-lg smallRectangleCard" :elevation="2"> 
            <v-card-text class="cardText1 primary--text">
              <div><v-badge bordered dot inline left>Register for a zummPay account</v-badge></div>
              <div><v-badge bordered dot inline left>Activate and setup our lending services</v-badge></div>
              <div><v-badge bordered dot inline left>Apply for a loan</v-badge></div>
            </v-card-text>
          </v-card>
          <div class="imgBox d-flex align-lg-end align-center">
            <v-img src="../open_box.png"/>
          </div>
          <v-card color="transparent" class="rounded-lg smallRectangleCard" :elevation="2"> 
            <v-card-text class="cardText2 primary--text">
              <div><v-badge bordered dot inline left>Register for a zummPay account</v-badge></div>
              <div><v-badge bordered dot inline left>Activate and setup our lending services</v-badge></div>
              <div><v-badge bordered dot inline left>Apply for a loan</v-badge></div>
            </v-card-text>
          </v-card>
        </v-card>
      </v-container>
    </section>
    <section style="background-color: rgba(230,230,230,0.3);height: auto;" :height="$vuetify.breakpoint.smAndDown ? '100%' : '400'" class="d-flex align-center">
      <v-container class="d-flex flex-md-row flex-column align-md-start align-center text-center justify-space-around text-md-left">
        <v-card :elevation="0" class="rounded-lg mt-16 md-lg-0" color="transparent">
          <v-card-title class="primary--text">
            Enjoy flexible interest rates with<br>
            longer repayment plans.
          </v-card-title>
          <br class="d-none space">
          <v-card-subtitle class="primary--text">
            <br>Without a fixed interest rate, you can enjoy up to 18<br>
            months installment payments on ZuumPay with the<br>
            lowest interest rates and credit score on early and<br>
            one-time repayments. 
          </v-card-subtitle>
        </v-card>
        <div class="undrawHappy" style="max-width: 100%;"><v-img src="../undraw_happy_announcement_re_tsm0 (1).svg"/></div>
      </v-container>
    </section>
    <footer-component/>
  </div>
</template>

<script>
export default {
  name: "App",
  layout:'guest',
  data() {
    return {
      min1: 1,
      max1: 10000000,
      min2:1,
      max2:12,
      range: [0, 1],
      slider1:'',
      slider2:''
    }
  }
}
</script>

<style lang="scss">
  body {
    .v-slider--horizontal .v-slider__track-container {
      height: 6px;
    }
       .background10 {
      background: url('../static/Rectangle 10.png') no-repeat center center !important; 
      background-size: cover !important;
    }
    .imgBox {
      height: 250px;
    }
    .img1,.img2 {
      position: absolute;
    }
    .img2 {
      left:-180px;
      top:0px;
      bottom: 0;
    }
    .img1 {
      left:-200px;
      top:-232px;
      bottom: 0;
    }
    .bg {
      background: url('../static/Rectangle 30.png') no-repeat !important;
      background-size: cover !important;
    }
    .cardText1,.cardText2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
    .cardText1 {
      .v-badge__badge::after {
        background-color:#b3b5c7 ;
        border-color:#b3b5c7;
      }
    }
    .cardText2 {
      .v-badge__badge::after {
        background-color:#4652B0 ;
        border-color:#4652B0;
      }
    }
    .bgLending {
      background-repeat: no-repeat;
      background-position: center;
      min-height: 100vh;
      background:linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('../static/pricing-wave.png') no-repeat 50% 50%;
    }
    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .section-color {
      background-color:#4652B0;
      min-height: 100vh;
    }
    .oval {
      text-align: center;
      color: white;
      .ovalCard {
      background: rgba(255,255,255,0.15) !important;
      margin: 16px;
      width: 200px;
      height: 254px;
      display: flex;
      flex-direction: column;
      .v-image__image--cover {
        background-size:auto;
      }
    }
    }
    .squareCard {
      background: rgba(255,255,255,0.15) !important;
      width: 360px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .v-responsive {
        height: auto;
        width: 280px;
      }
    }
    .rectangleCard {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .smallRectangleCard {
      width: 400px;
      height: 250px;
    }
    .undrawHappy {
      .v-responsive__content {
        width: 450px !important;
      }
    }
    @media (min-width:1150px) {
     .path {
       top:89px !important;
       .v-image {
         width: 1150px !important;
       }
     } 
   }
   @media (max-width:1149px) {
     .path {
       top:149px !important;
       .v-image {
         width: 1000px !important;
       }
     } 
   }
   @media (max-width:999px) {
     .path {
       top:225px !important;
       .v-image {
         width: 800px !important;
       }
     } 
   }
   @media (max-width:799px) {
     .path {
       top:265px !important;
       .v-image {
         width: 700px !important;
       }
     } 
   }
   @media (max-width:699px) {
     .path {
       top:300px !important;
       .v-image {
         width: 600px !important;
       }
     } 
   }
   @media (max-width:599px) {
     .path {
       top:340px !important;
       .v-image {
         width: 500px !important;
       }
     } 
   }
   @media (max-width:499px) {
     .congrats {
       max-width: 200px !important;
     }
     .path {
       top:300px !important;
       .v-image {
         width: 400px !important;
       }
     } 
   }
    @media (max-width:399px) {
      .congrats {
        max-width: 118px !important;
      }
      .ellipse {
        right: 180px !important;
        top: 127px !important;
      }
      .path {
         top:278px !important;
         .v-image {
           width: 300px !important;
         }
       } 
    }
  }
</style>