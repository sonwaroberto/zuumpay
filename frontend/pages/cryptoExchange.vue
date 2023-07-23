<template>
  <div>
    <v-main class="Rectangle1">
      <v-container style="min-height:100vh" class="flexColumn flex-md-row justify-md-space-between">
        <v-card outlined color="transparent" class="union2 primary--text text-center text-md-left" style="font-family:Montserrat">
          <br class="d-md-none d-block">
          <br class="d-md-none d-block">
          <v-card-title style="word-break: break-word;">
            The most secured, easiest and<br>
            fastest way to Buy, Sell and spend<br>
            Bitcoin and other cryptos gloabally.
          </v-card-title>
          <br class="d-none space">
          <v-card-subtitle class="primary--text">
            <br>Instantly Buy and Sell your crypto currencies with <br>
            the most secured crypto exchange on the internet<br>
            with no KYC needed directly into your crypto<br>
            wallet.
          </v-card-subtitle>
        </v-card>
        <!-- <v-card min-width="325" :elevation="0" class="buble2 flexColumn text-center rounded-lg justify-center mt-md-0 mt-8" >
          <div style="position:absolute;left: -25px;top: -25px;">
            <v-img src="../Ellipse 3.png" contain width="54"></v-img>
          </div>
          <v-card-text>
            <v-btn width="100%" class="onPrimary--text rounded-b-0" style="opacity:.2"
            color="primary" large :elevation="0"> Buy </v-btn>
          </v-card-text>
          <v-card-subtitle class="primary--text">
            You ordered bitcoin of $500.<br>
            You will reveive $0.00112233 to<br>
            address ID
          </v-card-subtitle>
          <v-card-text class="primary--text" style="font-weight:bold">
            3FZbgi29cpjq2GjdwV8eyH<br>
            uJJnkLtktZc5
          </v-card-text>
          <VO ref="observer" tab="form">
            <VP rules="required" v-slot="{ errors }" number="payment option">
              <v-select style="width:280px" dense filled color="primary" class="primary--text"
                 label="Select Payment Option"></v-select>
            </VP>
          </VO>
          <v-card-actions>
            <v-btn color="primary" class="onPrimary--text pa-4">pay</v-btn>
          </v-card-actions> 
        </v-card> -->
        <v-card width="460" height="auto" outlined class="buble1 flexColumn rounded-xl 
          justify-space-around mt-md-0 mt-16">
           <div style="position:absolute;left: -25px;top: -25px;">
            <v-img src="../Ellipse 3.png" contain width="54"></v-img>
          </div>
          <v-card-text class="d-flex justify-center">
            <v-card width="400px" color="transparent" :elevation="0">
              <v-app-bar color="transparent" :elevation="0">
                <v-tabs>
                  <v-tab @click="buy=true,sell=false">Buy </v-tab>
                  <v-tab class="tab2" @click="sell=true,buy=false">sell </v-tab>
                </v-tabs>
              </v-app-bar>
            </v-card>
          </v-card-text>
          <v-card-text>
            <VO ref="observer" tab="form" v-if="buy || sell">
              <VP rules="required|numeric" name="send amount">
                <v-text-field class="rounded-lg" outlined placeholder="Enter amount">
                  <template v-slot:label>
                    <v-badge bordered dot inline left style="font-size:12px">SEND AMOUNT</v-badge>
                  </template>
                  <template v-slot:append>
                    <v-select dense relative style="top:10px" v-model="currecyBuy" :items="items">
                    </v-select> 
                  </template>
                </v-text-field>
              </VP>
              <VP rules="required|numeric" name="send amount">
                <v-text-field class="rounded-lg" outlined placeholder="Enter amount">
                  <template v-slot:label>
                    <v-badge bordered dot inline left style="font-size:12px">RECEIVING AMOUNT</v-badge>
                  </template>
                  <template v-slot:append>
                    <v-select dense relative style="top:10px" v-model="currecySell" :items="items">
                    </v-select> 
                  </template>
                </v-text-field>
              </VP>
              <VP rules="required|numeric" name="send amount">
                <v-text-field class="rounded-lg" outlined placeholder="Enter your bitcoin wallet">
                  <template v-slot:label>
                    <v-badge bordered dot inline left style="font-size:12px">WALLET ID</v-badge>
                  </template>
                </v-text-field>
              </VP>
            </VO>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" v-if="buy" class="onPrimary--text px-8">buy</v-btn>
            <v-btn color="primary" v-if="sell" class="onPrimary--text px-8">sell</v-btn>
          </v-card-actions> 
        </v-card>
      </v-container>
      <section class="component19 d-flex justify-center align-center" style="width:100%">
        <v-container class="d-flex flex-lg-row flex-column justify-space-around align-center">
          <v-card elevation="0" color="transparent" class="d-flex align-center">
            <div style="position:relative">
              <div style="position:absolute;top:0px;left:122px" class="img127">
                <v-img contain width="190" src="../Group 127.png"></v-img>
              </div>
               <div style="position:absolute;top:60px;left:150px" class="img129">
                <v-img contain width="160" src="../Group 129.png"></v-img>
              </div>
              <div style="position:absolute; bottom:210px;left:-26px" class="img8">
                <v-img contain width="160" src="../Union 8.png"></v-img>
              </div>
              <v-img contain width="300" style="z-index:2" src="../buy.png" class="imgBuy"></v-img>
              <div style="position:absolute;z-index:1;top:220px;left:140px;" class="img9">
                <v-img contain width="170" src="../Union 9.png"></v-img>
              </div>
              <div style="position:absolute;top:260px;left:-20px;z-index:2" class="img128">
                <v-img contain width="200" src="../Group 128.png"></v-img>
              </div>
            </div>
          </v-card>
          <br class="d-block d-md-none">
          <br class="d-block d-md-none">
          <v-card elevation="0" color="transparent" style="font-family:Verdana" class="d-flex text-lg-right text-center flex-column align-center">
            <v-card-title class="onPrimary--text" style="font-weight:bold">
              The most secured way to<br>
              Buy/Sell cryto currency<br>online
            </v-card-title>
            <v-card-actions class="d-flex justify-lg-end justify-center" style="width:100%">
              <v-btn color="secondary" class="onPrimary--text">Get Started</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </section>
      <section style="background-color: #eee;" class="d-flex align-center">
        <v-container class="d-flex align-start">
          <v-data-table
            :headers="headers"
            :items="crytoList"
            :items-per-page="5"
            :elevation="0"
            class="flexColumn rounded-xl bgTable primary--text"
          >
            <template v-slot:top>
              <v-toolbar flat color="transparent"> 
                <v-toolbar-title class="primary--text">List top cryptos here with their live market pricess</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn color="primary" class="onPrimary--text pa-4">buy/sell</v-btn>
            </template>
            <template v-slot:[`item.chg`]="{ item }">
              <span :class="color">{{item.chg}}</span>
            </template>
          </v-data-table>
        </v-container>
      </section>
      <section style="min-height:100vh;background-color:#eee;" class="d-flex align-center">
        <v-container class="d-flex flex-md-row flex-column align-center">
          <v-card color="transparent" class="primary--text flexColumn align-md-start text-md-left 
            text-center" style="font-family:Montserrat" :elevation="0">
            <v-card-title style="word-break: break-word;">
              Spend ALL your cryto currencies<br>
              with the ZuumPay Super Card.
            </v-card-title>
            <br class="d-none space">
            <v-card-subtitle style="font-size:16px;word-break: break-word;word-spacing: 0.2em;line-height:1.2;" 
              class="primary--text">
              <br>A single card to enable you spend both fait and crypo<br>
              currency both online and offline from anywhere and<br>
              with anyone in the world.<br><br>
              Yup,... the last card you will need
            </v-card-subtitle>
            <v-card-actions style="width:100%" class="d-flex justify-md-start align-center justify-center">
              <v-btn color="primary" class="onPrimary--text px-4">order card</v-btn>
            </v-card-actions>
          </v-card>
          <v-card elevation="0" color="transparent" style="position:relative;flex-grow:1" class="orderCard">
            <div class="cards" style="position:absolute;left:0%;">
              <v-img contain src="../Credit Cards.png" width="200"></v-img>
            </div>
             <div class="coin" style="position:absolute;bottom:100px;left:0%">
              <v-img contain src="../Doge Coin.png" width="180"></v-img>
            </div>  
            <div class="ethe" style="position:absolute;bottom:100px;left:50%">
              <v-img contain src="../Ethereum.png" width="162"></v-img>
            </div>
             <div class="bitcoin" style="position:absolute;top:30px;left:60%">
              <v-img contain src="../Bitcoin.png" width="132"></v-img>
            </div>
            <div class="card" style="position:absolute;bottom:220px;left:30%;transform:rotate(10deg)">
              <v-img contain src="../credit card.png" width="180"></v-img>
            </div>
          </v-card>
        </v-container>
      </section>
    </v-main>
    <v-card class="rounded-0 flexColumn justify-center text-center" max-width="100%"
      dark outlined color="primary">
      <br>
      <br>
      <v-card-title style="word-break: break-word;">
        Introducing the largest <br>
        African ICO
      </v-card-title>
      <br class="d-none space">
      <v-card-subtitle>
        <br>With more than 660 million students across 740 African universities<br>
        and colleges compared to 5,300 colleges and universities serving<br>
        a population of just 323 million people in teh united states,<br>
        the African need an infrastructure that will set them up<br>
        with a sustainable decentralized structure with <br>
        a global rach for anyone
      </v-card-subtitle>
      <div class="path306" style="position:absolute;top:250px;max-width:100%">
        <v-img max-width="100%" height="360px" src="../Path 306.png"></v-img>
      </div>
      <div>
        <v-img contain width="325" src="../undraw_the_world_is_mine_re_j5cr.png"></v-img>
      </div>
    </v-card>
    <div style="background-color: #eee;">
      <v-container class="flexColumn  primary--text text-center">
        <v-card outlined color="transparent" class="flexColumn primary--text">
          <v-card-title>Join our waiting list.</v-card-title>
          <br class="d-none space">
          <v-card-subtitle class="">
            <br>It's time to lead the digital revolution with,...<br>
            Join our newsletter to be amongst the first to participate and<br>
            own the tokens truly created to distribute wealth and<br>
            empower its owners within the ecosystem
          </v-card-subtitle>
          <v-card-text class="d-flex flex-column flex-lg-row">
            <v-card-text class="d-flex flex-column align-center flex-lg-row">
              <VO ref="observer" tab="form">
                <VP rules="required|email" v-slot="{ errors }" name="email">
                  <v-text-field style="top:12px" :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '400px'" relative class="rounded-lg email" dense label="Enter email account" outlined placeholder="Enter email account">
                  </v-text-field>
                </VP>
              </VO>
              <v-btn color="primary" class="onPrimary--text mx-8">join now</v-btn>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <footer-component/>
  </div>
</template>

<script>
export default {
  name: "App",
  layout:'guest',
  created() {
    this.crytoList.forEach((val)=>{
      let value = Number(val.chg.slice(0,-1))
      if(value<0){
        this.color = "red--text"
      } else {
        this.color = "primary--text"
      }
    })
  },
  data() {
    return {
      items:["USD","XAF","EUR","BTC"],
      currecyBuy:"USD",
      currecySell: "BTC",
      buy:true,
      sell:false,
      headers: [
          {text:"#",align: 'start',value: 'number'},
          {text:"Crytocurrency",value: 'currency' },
          {text:"Price",value: 'price' },
          {text:"24h % Chg",value: 'chg' },
          {text:"Market cap",value: 'marketCap' },
          {text:"Actions",value: 'actions', sortable: false }
        ],
        crytoList: [
          {
            number: '1',
            currency: "Bitcoin",
            price: "$42,125.60",
            chg: "-1.34%",
            marketCap: "$793,1B",
          },
          {
            number: '2',
            currency: "Ethereum",
            price: "$2,125.60",
            chg: "-3.08%",
            marketCap: "$333.8B",
            iron: '7%',
          },
          {
            number: '3',
            currency: "Cardano",
            price: "$2.60",
            chg: "-5.18%",
            marketCap: "$71.7B",
            iron: '8%',
          },
          {
            number: '4',
            currency: "Tether USD",
            price: "$1",
            chg: "-0.02%",
            marketCap: "$30.8B",
          }
        ],
        color:'primary--text'
    }
  }
}
</script>

<style lang="scss">
  body {
    .orderCard {
      height: 500px;
      background:linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('../static/pricing-wave.png') no-repeat 50% 50%;
      background-size: cover;
      width: 100%;
    }
    .buble1 { 
      background:rgba(70, 82, 176,.1) !important;
      .v-input__control > .v-input__slot fieldset {
        background: linear-gradient(45deg,#f2f3fd,#ced6ec) !important;
        border: none;
      }
      .v-label{
        color: #4652B0;
      }
      >div {
        max-width: 100%;
        overflow: hidden;
      }
      .v-slide-group__content {
        display: flex;
        .v-tab {
          flex-grow: 1;
        }
      }
      /* .v-input__slot:before {
        border: 0 !important;
      }
      .v-input__slot:after {
        border: 0 !important;
      } */
    }
    .union2 {
      background: url('../static/Union 2.png') no-repeat center center !important; 
      background-size: cover !important;
    }
    .component19 {
      background: url('../static/Rectangle 12.png') no-repeat center center; 
      background-size: cover !important;
      min-height: 100vh;
    }
    @media (min-width:700px) {
      .component19 {
        .img127 {
          top:0px !important;
          left:200px !important;
          .v-image {
            width: 350px !important; 
          }
        }
        .img8 {
          bottom:210px !important;
          left:-100px !important;
          .v-image {
            width: 280px !important; 
          }
        }
        .img129 {
          top:100px !important;
          left:250px !important;
          .v-image {
            width: 300px !important; 
          }
        }
        .img9 {
          top:220px !important;
          left:160px !important;
          .v-image {
            width: 320px !important; 
          }
        }
        .img128 {
          top:300px !important;
          left:-90px !important;
          .v-image {
            width: 300px !important; 
          }
        }
        .imgBuy {
            width: 400px !important; 
        }
      }
    }
    @media (min-width:960px) {
      .orderCard {
        width: auto !important;
      }
    };
    @media (min-width:374px) {
      .path306 {
        top:175px !important;
      }
    }
     @media (min-width:400px) {
      .path306 {
        top:175px !important;
      }
    }
    @media (min-width:446px) {
      .path306 {
        top:243px !important;
      }
    }
    @media (min-width:457px) {
      .path306 {
        top:220px !important;
      }
    }
    @media (min-width:630px) {
      .cards {
        left: 25% !important;
      }
      .coin {
        left: 25% !important;
        bottom:100px !important;
        .v-image {
          width: 150xp !important;
        }
      }
      .ethe {
        left: 50% !important;
        bottom:60px !important;
        .v-image {
          width: 200px !important;
        }
      }
      .bitcoin {
        left: 55% !important;
        top:30px !important;
      }
      .card {
        bottom: 220px !important;
        left: 40% !important;
      }
    }

    .Rectangle1 {
      background: url('../static/Rectangle 1.png') no-repeat center center !important; 
      background-size: cover !important;
    }
    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    tr:nth-child(even),tr th {
      background-color: #d4d4f4 !important;
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
    .buble2 { 
      background:rgba(70, 82, 176,.2) !important;
      .buttonForm {
        padding: 0 32px !important;
      }
      .v-input__control > .v-input__slot fieldset {
        background: #fff !important;
        border: none;
      }
      .v-label{
          color: #4652B0;
        }
    }
    .v-slide-group__wrapper {
      height: 46px !important;
    }
    .v-tab {
      color: #4652B0 !important;
      border-bottom: 2px solid white;
    }
    .v-tab--active{
        color: white !important;
        background-color: #cbc8e5 !important;
      }
    .expand {
      .v-btn__content {
        font-size: x-small !important;
      }
    }
    .v-input__append-inner {
      margin: 0 !important;
    }
    .v-select__selections input {
      display: none;
    }
    .v-select__selection,.v-input__icon--append .notranslate {
      color: #4652B0;
    }
    /* .theme--light.v-text-field > .v-input__control > .v-input__slot:before{
      display: none;
    } */
  }
</style>