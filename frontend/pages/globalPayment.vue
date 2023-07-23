<template>
  <v-main style="background:linear-gradient(90deg,#A8C0FF,#3e4891);max-width: 100%; overflow:hidden;">
    <v-container style="min-height:120vh" class="flexColumn align-md-start">
      <v-card :elevation="0" max-width="100%" width="100%" color="transparent"
        class="d-flex flex-lg-row flex-column align-center justify-center justify-lg-space-between" min-height="100vh">
        <div style="min-width: 400px;" class="d-flex flex-column align-center">
          <v-card color="transparent" style="overflow-wrap: break-word;"
            class="d-flex flex-column align-lg-start align-center text-md-left text-center" dark :elevation="0">
            <br>
            <br>
            <v-card-title style="word-break: break-word;">
              Building the Superapp for frontier market !.
            </v-card-title>
            <v-card-title class="mt-4" style="font-size: 14px;  word-break: break-word;">
              In a world where everything is becoming digital,<br>
            it is sad that it's cheaper to pay with cash than to<br>
            use banks, mobile money, paypal, etc. Zuumpay's<br>
            mission is to connect and empower frontier and<br>
            under-represented markets to the gloabal<br>
            economy with a free,seamless,<br class="d-block d-md-none">
            secured payment and<br>
            financial tool.
            </v-card-title>
          </v-card>

          <v-card  :width="$vuetify.breakpoint.smAndDown ? '300px' : '400px'" style="transform: skewX(-3deg) skewY(-3deg) rotate3d(0, -1, 1, 2deg);" color="transparent" dark class="flexColumn overlayCardIcon 
            rounded-xl mt-8">
            <v-card-title>Coming Soon</v-card-title>
            <div class="d-flex align-space-between">
              <v-card-text>
                <v-img max-width="50" src="../googlePlayStore.png"/>
                Google Play
              </v-card-text>
              <v-card-text>
                <v-img max-width="50" src="../Appstore.png"/>
                Apple Store
              </v-card-text>
              <v-card-text>
                <v-img max-width="50" src="../windows.png"/>
                Desktop App
              </v-card-text>
            </div>
          </v-card>

        </div>
        <div class="d-flex justify-md-end justify-center" style="position:relative;max-width:100%;z-index:2">
          <v-img :max-width="1000" class="phone" contain src="../phonezoom.png">
            <div style="position:absolute;top:0px;left:520px">
              <v-img contain width="200" src="../Bitcoin.png"></v-img>
            </div>
            <div style="position:absolute;top:90px;left:240px;z-index:3">
              <v-img contain width="230" src="../Doge Coin.png"></v-img>
            </div>
            <div style="position:absolute;right:230px;top:200px;z-index:3">
              <v-img contain width="250" src="../Ethereum.png"></v-img>
            </div>
            <div style="position:absolute;bottom:0;left:250px">
              <v-img contain width="200" src="../Bag.png"></v-img>
            </div>
          </v-img>
        </div>
        <div style="height: 50px;" class="d-lg-none d-block"></div>
      </v-card>
    </v-container>
    <section class="rectangle22">
      <v-container>
        <v-card style="position: relative;bottom: 60px;" :min-height="$vuetify.breakpoint.mdAndDown ? '700px' : '500px'"
          :elevation="0" class="rounded-lg component18 flexColumn flex-md-row justify-space-around">
          <v-card color="transparent" class="rounded-lg" :elevation="0">
            <div style="position:relative" class="d-flex align-center justify-center">
              <v-img contain width="500" src="../Rectangle 21.png"> </v-img>
              <div style="position:absolute;">
                <v-img contain width="80" src="../Group 38.png"></v-img>
              </div>
            </div>
          </v-card>
          <v-card color="transparent" :elevation="0" class="text-lg-left text-center">
            <v-card-subtitle style="font-size:16px" class="secondary--text">
              With cash being outdated and the instability,<br>
              complexity, and lack of scalab  ility that keeps<br>
              cryto from the masses, we believe its time!.
            </v-card-subtitle>
            <v-card-subtitle style="font-size:16px" class="secondary--text">
              ZuumPay is merging the best of traditional<br>
              payments and digital payments to give you<br>
              a robust, sophisticated and seamless payment<br>
              and financial tool with a secured and cost<br>
              effective module,... initiating the future.
            </v-card-subtitle>
          </v-card>
        </v-card>
      </v-container>
    </section>
    <section class="rectangle22">
      <v-container class="flexColumn justify-center align-md-start">
        <v-card :elevation="0" max-width="100%" style="word-spacing: 4px;" min-height="60%" color="transparent" class="d-flex flex-md-row flex-column align-center text-center text-lg-right 
          justify-space-between">
          <div style="position:absolute;bottom:50px;right:700px">
            <v-img contain src="../Ellipse 11.png" width="700"></v-img>
          </div>
          <div class="d-flex justify-md-end justify-center" style="position:relative;width:50%;z-index:2">
            <v-img :max-width="750" style="transform: rotate(-5deg)" src="../phonezoom.png">
              <div style="position:absolute;top:100px;left:220px">
                <v-img contain width="70" src="../8703894_euro_money_currency_coin_icon.png"></v-img>
              </div>
              <div style="position:absolute;bottom:-30px;left:340px">
                <v-img contain width="160" src="../8703938_eth_cryptocurrency_blockchain_coin_currency_icon.png">
                </v-img>
              </div>
              <div style="position:absolute;top:50px;right:190px">
                <v-img contain width="160" src="../8703956_pound_currency_money_coin_bank_icon.png"></v-img>
              </div>
              <div style="position:absolute;right:170px;top:180px">
                <v-img contain width="160" src="../8704008_yuan_currency_money_coin_icon.png"></v-img>
              </div>
              <div style="position:absolute;bottom:60px;left:160px">
                <v-img contain width="160" src="../8703922_rupee_money_currency_payment_coin_icon.png"></v-img>
              </div>
            </v-img>
          </div>
          <v-card width="100%" :elevation="0" class="rounded-lg d-flex flex-column" color="transparent">
            <v-card-title class="primary--text mx-lg-0 ml-lg-auto mx-auto" style="word-break: break-word;">
              Seamless digital payments for <br>
              emerging markets
            </v-card-title>
            <br class="d-none space">
            <v-card-subtitle class="primary--text">
              <br>With cash being outdated and the instability,<br>
              complexity, and lack of scalability that keeps crypo<br>
              from the masses, we believe its time!.
            </v-card-subtitle>
            <v-card-subtitle class="primary--text">
              ZuumPay is merging the best of traditional<br>
              payments and digital payments to give you a robust,<br>
              sophisticated and seamless payment and financial<br>
              tool with a secured and cost effective module,...<br>
              initiating the future.
            </v-card-subtitle>
          </v-card>
        </v-card>
      </v-container>
    </section>
    <section class="rectangle22">
      <v-container>
        <div color="transparent" class="d-flex justify-space-around align-center flex-md-row flex-column text-center 
        text-md-left" style="word-spacing: 4px;word-break: break-word;min-height:100vh;" elevation="0">
          <v-card :elevation="0" class="rounded-lg" color="transparent">
            <v-card-title class="primary--text" style="word-break: break-word;">
              We are creating an ecosystem for <br>
              effortless payments on a gloabal scale.
            </v-card-title>
            <br class="d-none space">
            <v-card-subtitle class="primary--text">
              <br>ZuumPay's enables business owners, companies and<br>
              individuals to precess payments online, offline, cards<br>
              and perform instant transactions with multiple<br>
              financial options
            </v-card-subtitle>
            <br class="d-none space">
            <v-card-subtitle class="primary--text">
              <br>ZuumPay can process all payment types, both online<br>
              and offline, including mobile money, credit cards, crypto<br>
              and stable coins, wallets, etc. It also has built-in<br>
              financing with interest earned on deposits and<br>
              business loans.
            </v-card-subtitle>
          </v-card>
          <v-spacer />
          <div style="position:relative">
            <v-img contain max-width="380" style="transform: rotate(10deg)" src="../credit card.png">
            </v-img>
            <div style="position:absolute;top:120px;left:0px">
              <v-img contain width="450" src="../qr.png" />
            </div>
            <div style="position:absolute;top:-100px;left:100px">
              <v-img contain width="700" height="500" src="../Ellipse 13.png"></v-img>
            </div>
          </div>
          <v-spacer />
        </div>
        <br class="d-block d-md-none">
        <br class="d-block d-md-none">
        <br class="d-block d-md-none">
        <br class="d-block d-md-none">
        <br class="d-block d-md-none">
        <div class="d-flex align-start align-sm-center justify-space-around flex-lg-row flex-column mt-16 mt-md-0" style="min-height:100vh">
          <div style="min-width: 400px;">
            <div class="line mt-16" style="color:#4652B0">
              <div class="circleTop1 font-weight-bold"><span>Traditional finance using old rails.</span></div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Long settlement periods (from hours to 14 days)</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Costly processing fees ($40-50B annually paid as <br> fees in the US alone)</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Cross-border limitations leading to payment <br> friction and financial loss</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Data controlled by third parties</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Fraud and security vulnerability</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Innovations can only happen on top of the <br>network,which is costly, slow and limiting</span>
                </span>
              </div>
              <br>
              <div class="circleTop2 font-weight-bold"><span>Cryto yet to be a mass solution</span></div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Lack of scalable insfrastructures.</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Price volatility and lack on inherent value.</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Complexity and instability.</span>
                </span>
              </div>
              <div class="leftLine">
                <span class="lineCirlce">
                  <span>Limited accessibility by masses.</span>
                </span>
              </div>
              <div class="circleTop3"></div>
            </div>
          </div>
          <div class="mt-lg-0 mt-16">
            <v-img contain width="350" src="../undraw_online_payments_re_y8f2.png"></v-img>
          </div>
        </div>
        <div style="min-height: 100vh;word-break: break-word;" class="d-flex flex-column align-center justify-center">
          <br class="d-block d-md-none">
          <br class="d-block d-md-none">
          <br class="d-block d-md-none">
          <br class="d-block d-md-none">
          <br class="d-block d-md-none">
          <v-card class="primary--text flexColumn justify-center text-center" outlined color="transparent">
            <v-card-title>That Is why ZuumPay</v-card-title>
            <v-card-subtitle class="primary--text">
              <br>A simple, secured financial interface built around an ecosystem<br>
              that bridges borders, connecting people and business across the world<br>
              enabled to process and accept multiple payment methods<br>
              making transactions seamless, secured and instantaneous thus<br>
              powering up a borderless gloabal<br>
              financial community.
            </v-card-subtitle>
          </v-card>
          <v-img src="../undraw_connected_world_wuay.svg " width="600" contain style="top: 64px;" />
        </div>
      </v-container>
      <div style="min-height: 100vh;" class="d-flex rectangle26">
        <v-container class="component9 flexColumn rounded-xl flex-lg-row justify-space-around 
          mt-16 mb-16">
          <v-card width="300" color="primary" dark class="rounded-xl mt-lg-0 mt-8 flexColumn" :elevation="0">
            <v-card-title class="mr-auto">
              Contact with us
            </v-card-title>
            <v-card-text>
              Our office are located in a <br>
              Beautiful building and <br>
              garden.
            </v-card-text>
            <div class="d-flex">
              <div>
                <v-card-text>
                  <v-img height="100px" width="50" src="../location.png"></v-img>
                </v-card-text>
              </div>
              <div>
                <v-card-title>
                  ADDRESS
                </v-card-title>
                <v-card-subtitle>
                  Lorem ipsum solo sit amet<br>
                  consectir dallum
                </v-card-subtitle>
              </div>
            </div>
            <div class="d-flex">
              <div>
                <v-card-text>
                  <v-img height="100px" width="50" src="../mobile.png"></v-img>
                </v-card-text>
              </div>
              <div>
                <v-card-title>
                  PHONE
                </v-card-title>
                <v-card-subtitle>
                  Lorem ipsum solo sit amet<br>
                  consectir dallum
                </v-card-subtitle>
              </div>
            </div>
            <div class="d-flex">
              <div>
                <v-card-text>
                  <v-img height="100px" contain width="50" src="../at.png"></v-img>
                </v-card-text>
              </div>
              <div>
                <v-card-title>
                  EMAIL ID
                </v-card-title>
                <v-card-subtitle>
                  Lorem ipsum solo sit amet<br>
                  consectir dallum
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
          <v-card max-width="500" width="100%" color="transparent" dark class="contactForm primary--text"
            :elevation="0">
            <v-card-text>
              <VO ref="observer" tab="form">
                <VP rules="required|numeric" v-slot="{ errors }" name="amount">
                  <v-text-field label="Enter amount" class="rounded-lg" outlined placeholder="Enter amount">
                  </v-text-field>
                </VP>
                <VP rules="required|numeric" v-slot="{ errors }" name="amount">
                  <v-text-field label="Enter amount" class="rounded-lg" outlined placeholder="Enter amount">
                  </v-text-field>
                </VP>
                <VP rules="required|numeric" v-slot="{ errors }" name="amount">
                  <v-text-field label="Enter amount" class="rounded-lg" outlined placeholder="Enter amount">
                  </v-text-field>
                </VP>
                <VP rules="required" v-slot="{ errors }" name="destination">
                  <v-textarea label="Destination" class="rounded-xl" rows="7" outlined placeholder="destination">
                  </v-textarea>
                </VP>
              </VO>
              <v-btn width="100%" color="primary" class="onPrimary--text pa-4 mb-8">submit</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
      <div class="rectangle28" style="position:relative">
        <v-container>
          <v-card width="100%" class="d-flex flex-column mx-auto align-center mt-16 mb-16 primary--text text-center"
            color="transparent" outlined :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '77.2%'">
            <div class="d-flex flex-column align-center" style="max-width: 100% !important;">
              <v-card-title style="  word-break: break-word;">Subscribe to our news letter</v-card-title>
              <br class="d-none space">
              <v-card-subtitle class="black--text">
                <br>Join our community and stand a chance to win $500<br>
                monthly once the zummPay Apps are public on IOS and Android.
              </v-card-subtitle>
              <br>
              <v-card-text style="max-width: 100%;overflow: hidden;"
                class="d-flex flex-column align-center flex-lg-row">
                <VO ref="observer" tab="form">
                  <VP rules="required|email" v-slot="{ errors }" name="email">
                    <v-text-field style="top:12px;min-width: 300px;" relative class="rounded-lg email" dense 
                      label="Enter email account" outlined placeholder="Enter email account">
                    </v-text-field>
                  </VP>
                </VO>
                <v-btn color="primary" class="onPrimary--text mx-8">Subscribe</v-btn>
              </v-card-text>
            </div>
          </v-card>
        </v-container>
        <div style="position:absolute;bottom:0">
          <v-img contain width="200" src="../Polygon 2.png" style="opacity:.3"></v-img>
        </div>
      </div>
    </section>
    <footer-component />
  </v-main>
</template>

<script>
export default {
  name: "App",
  layout:'guest',
}
</script>

<style lang="scss">
  body {
    .phone .v-image__image {
      z-index: 2;
    }

    .section1Gradient {
      background: linear-gradient(to bottom right, #9faef1, #041152);
    }

    .rectangle20 {
      background: url('../static/Rectangle 20.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .rectangle28 {
      background: url('../static/Rectangle 28.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .component9 {
      background: url('../static/Component 1 – 9.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .component18 {
      background: url('../static/Component 1 – 8.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .rectangle22 {
      background: url('../static/Rectangle 22.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .rectangle26 {
      background: url('../static/Rectangle 26.png') no-repeat center center !important;
      background-size: cover !important;
    }

    .textRight {
      .v-responsive__content {
        width: 0 !important;
      }
    }
    .phone {
      >.v-responsive__content {
        display: flex !important;
        .cardImg1,
        .cardImg2,
        .cardImg3 {
          position: relative;
          .img1,
          .img2 {
            position: absolute;
            width: 100px;
          }

          .img2 {
            bottom: 30px;
          }
        }

        .cardImg2 {
          .img1 {
            bottom: 0;
            right: 20px;
          }
        }

        .cardImg1 {
          justify-content: flex-end !important;

        }

        .cardImg1,.cardImg3 {
          .img1 {
            top: 30px;
          }
        }
      }
    }

    .v-card__title {
      font-weight: bold !important;
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bg1 {
      background: url('../static/background1.png') no-repeat 70% 70% !important;
      background-size: cover !important;
    }

    .overlayCardIcon {
      background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(118, 118, 248, 0.2));
    }

    .overlayContact {
      background: rgba(255, 255, 255, 0.15) !important;
    }

    .overlayContactForm {
      background-color: #4D5AC1 !important;
    }

    .contactForm {
      .v-input__control>.v-input__slot fieldset {
        background: linear-gradient(45deg, #e8e9ec, #7f89cf) !important;
        border: none
      }

      .v-label {
        color: #4652B0;
      }
    }

    .email fieldset {
      border: none;
      background: rgba(120, 120, 255, 0.4) !important;
      .v-label {
        color: #4652B0;
      }
    }

    @media (min-width:490px) {
      .list {
        width: 500px !important;
      }
    }

    @media (min-width:400px) {
      .list {
        width: 400px !important;
      }
    }
  .line {
    height:500px;
    width:3px;
    position:relative;
    .circleTop1,.circleTop2,.circleTop3 {
      display:inline-block;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      position:absolute;
      top:-2px;
      right:-8px;
    }
    .circleTop2 {
      position:relative;
      right:10px;
      top: 14px;;
    }
    .circleTop1 span,.circleTop2 span {
      display:inline-block;
      position:relative;
      right:-24px;
      bottom:0px;
      width: 350px;
    }
    .circleTop3 {
      top:500px;
      right:-4px;
      height:10px;
      width:10px;
    }
    .leftLine:after {
      display: block;
      content: '';
      width: 50px;
      height: 50px;
      border-left: 2px solid blue;
      border-bottom: 2px solid blue;
      border-radius:  0 0 0 100px ;
    }
    .leftLine {
      position:relative;
      width:48px;
      .lineCirlce {
        display:inline-block;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        position:absolute;
        bottom:-2px;
        right:-6px;
        span {
          display:inline-block;
          position:relative;
          right:-12px;
          bottom:6px;
          width: 350px;
          font-size: 10px;
        }
      }
    }
  }
.line,.circleTop1,.circleTop2,.circleTop3,.lineCirlce{
  background-color: blue;
}
  @media (min-width:380px) {
    .lineCirlce span {
      font-size: 14px !important;
    }
  }
 @media (min-width:460px) {
    .lineCirlce span {
      font-size: 16px !important;
    }
  }
  }
</style>