<template>
  <div style="max-width: 100%; overflow:hidden;">
    <v-main class="d-flex align-center index">
      <div style="position:absolute;left:-200px;top:-300px;opacity:.4">
        <v-img src="../Path 3.png" contain width="500"></v-img>
      </div>
      <div style="position:absolute;left: 50px;top:-50px;">
        <v-img src="../Ellipse 8.png" contain width="40"></v-img>
      </div>
      <div style="position:absolute;left: -200px;top:100px;opacity:.9">
        <v-img src="../Path 2.png" contain width="600"></v-img>
      </div>
      <div style="position:absolute;left: 250px;top:-150px;opacity:.4">
        <v-img src="../Path 1.png" contain width="650"></v-img>
      </div>
      <div style="position:absolute;left:-200px;top:-300px;opacity:.4">
        <v-img src="../Path 3.png" contain width="500"></v-img>
      </div>
      <v-container class="flexColumn flex-md-row justify-md-space-between">
        <v-card outlined color="transparent" class="primary--text text-center text-md-left padding">
          <v-card-title style="word-break: break-word">
            <br class="d-lg-none d-block">
            The secured, easiest, and fastest<br>
            way to instantly transfer and spend<br>
            your money.
          </v-card-title>
          <br>
          <v-card-subtitle class="primary--text">
            Send and Spend money globally with anyone<br>
            in minutes with greate rates and zero fees with<br>
            more than 85 currencies supported.
          </v-card-subtitle>
          <v-card-text>
            <v-btn outlined class="secondary--text" style="border: 1px solid #4652B0">
              learn more
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card style="position:relative;box-shadow: none;" color="transparent">
          <v-card elevation="0" style="z-index: 3;" class="homeCard flexColumn rounded-xl justify-space-around mt-md-0 mt-16">
            <div style="position:absolute;right: -50px;top: -50px;">
              <v-img src="../Ellipse 4.png" contain width="110"></v-img>
            </div>
            <v-card-text class="d-flex justify-center">
              <v-card width="400px" color="transparent" :elevation="0">
                <v-app-bar color="transparent" :elevation="0">
                  <v-tabs>
                    <v-tab @click="sendMoney=true,requestMoney=false">send money </v-tab>
                    <v-tab class="tab2" @click="requestMoney=true,sendMoney=false">request money </v-tab>
                  </v-tabs>
                </v-app-bar>
              </v-card>
            </v-card-text>
            <v-card-text>
              <VO ref="observer" tab="form" v-if="sendMoney">
                <VP rules="required|numeric" name="send amount">
                  <v-text-field class="rounded-lg" outlined placeholder="Enter amount">
                    <template v-slot:label>
                      <v-badge bordered dot inline left>SEND AMOUNT</v-badge>
                    </template>
                    <template v-slot:append>
                      <v-select dense relative style="top:10px" v-model="currencyReceive" :items="items">
                      </v-select>
                    </template>
                  </v-text-field>
                  <v-text-field class="rounded-lg" outlined relative placeholder="Enter amount">
                    <template v-slot:label>
                      <v-badge bordered dot inline left>RECEIVING AMOUNT</v-badge>
                    </template>
                    <template v-slot:append>
                      <v-select dense relative v-model="currencySend" style="top:10px" :items="items">
                      </v-select>
                    </template>
                  </v-text-field>
                </VP>
                <br>
                <span class="primary--text">
                  Tranfer charges $0.0<br>
                  Credit card/MoMO fee 2.5%<br>
                  at Total fee $2.50
                </span>AMOUNT
              </VO>
              <VO ref="observer" tab="form" v-if="requestMoney">
                <VP rules="required|numeric" name="send amount">
                  <v-text-field class="rounded-lg" outlined relative placeholder="Enter amount">
                    <template v-slot:label>
                      <v-badge bordered dot inline left>RECEIVING AMOUNT</v-badge>
                    </template>
                    <template v-slot:append>
                      <v-select dense relative v-model="currencySend" style="top:10px" :items="items">
                      </v-select>
                    </template>
                  </v-text-field>
                </VP>
              </VO>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" class="onPrimary--text pa-4">continue</v-btn>
            </v-card-actions>
            <div style="position:absolute;bottom:40px;left:-34px">
              <v-img src="../Ellipse 3.png" contain width="50"></v-img>
            </div>
            
          </v-card>
          <div style="position:absolute;bottom:-8px;left:-20px;z-index:1;" class="pa-9 primary rounded-circle"></div>
        </v-card>
      </v-container>
    </v-main>
    <section style="min-height:100vh" class="section-color">
      <v-container class="d-flex align-center align-lg-start">
        <div class="d-flex flex-column align-lg-start align-center" style="width:100%;position:relative">
          <v-card color="transparent" dark :elevation="0" class="mt-8 padding" style="font-family:verdana">
            <v-card-subtitle class="py-0 onPrimary--text font-weight-bold text-uppercase">
              compare our pricing
            </v-card-subtitle>
            <v-card-title class="py-0 font-weight-bold"  style="word-break: break-word;">
              We charge $0.0 for money <br>
              transfer and mobile payments with <br>
              mid market exchange rates.
            </v-card-title>
          </v-card>
          <div class="d-flex flex-lg-row flex-column" style="width:100%;position:relative">
            <div class="d-flex flex-column align-lg-start align-center">
              <v-card dark class="card1" elevation="0" :width="$vuetify.breakpoint.smAndDown ? '450' : '500'"  style="position:relative">
                <div style="position:absolute;left:-50px;z-index:1"> 
                  <v-img src="../Piggy Bank.png" contain width="150"></v-img>
                </div>
                <div style="z-index:2">
                  <v-card-title>No hidden fees</v-card-title>
                  <v-card-subtitle>
                    fees Our mission is to financially connect everyone<br>
                    in the world for seamless, instant and secured<br>
                    transactions without borders. Zero charge for<br>
                    money transfer, no hidden fees and mid market<br>
                    exchanges for everyone.
                  </v-card-subtitle>
                </div>
              </v-card>
              <v-card dark class="card1" elevation="0" :width="$vuetify.breakpoint.smAndDown ? '450' : '500'" style="position:relative">
                <div style="position:absolute;right:-40px;top:20px;z-index:1"> 
                  <v-img src="../Pile of money.png" contain width="150"></v-img>
                </div>
                <div style="z-index:2">
                  <v-card-title>Instant Transactions</v-card-title>
                  <v-card-subtitle>
                    Get your money ready and availabe for use in a<br>
                    matter of seconds across the Zuumpay ecosystem<br>
                    for instant spending and more.
                  </v-card-subtitle>
                </div>
              </v-card>
              <v-card dark class="card1" elevation="0" :width="$vuetify.breakpoint.smAndDown ? '450' : '500'"  style="position:relative">
                <div style="position:absolute;top:60px;left:-40px;z-index:1"> 
                  <v-img src="../Vault.png" contain width="150"></v-img>
                </div>
                <div style="z-index:2">
                  <v-card-title>Security and Control</v-card-title>
                  <v-card-subtitle>
                    With Zuumpay we offer you exclusive access and<br>
                    control over your money with industry standard<br>
                    security systems with two-factor authentification to<br>
                    ensure that you, and only you can acess and<br>
                    manage your money with data protection services.
                  </v-card-subtitle>
                </div>
              </v-card>
            </div>
            <div style="position:relative;width:100%;display: flex;justify-content: center;" class="mx-auto">
              <v-img contain src="../mockup.png" :max-width="$vuetify.breakpoint.mdAndDown ? '800' : '1000'">
               <div style="position:absolute;top:280px;left:380px" class="union4">
                <v-img contain src="../Union 4.png" width="200"></v-img>
              </div>
              <div class="union3" style="position:absolute;left:240px;top:0px">
                <v-img contain src="../Union 3.png" width="190"></v-img>
              </div>
              </v-img>
            </div>
          </div>
        </div>
      </v-container>
    </section>
    <v-divider />
    <section style="min-height:100vh" class="flexColumn section-color">
      <v-card color="transparent" class="text-center mt-8" style="font-family:verdana" dark :elevation="0">
        <h5>HOW IT WORKS</h5>
        <h2 class="mt-4">What you can Do with ZuumPay</h2>
        <v-card-subtitle class="font-weight-bold">
          While we can customize your plan to suit your needs,<br>
          most clients schedule regular services
        </v-card-subtitle>
      </v-card>
      <div class="d-flex flex-wrap justify-center">
        <v-card width="285" color="rgba(255,255,255,0.15)" dark class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-exchange-100.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 7.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>Remittance</v-card-title>
            <v-card-text>
              Our mission in to financially connect<br>
              everyone in teh world for seamless,<br>
              instant and secured transactions<br>
              without borders.<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-mobile-payment-100.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 6.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>Payments/Wallets</v-card-title>
            <v-card-text>
              Get your money ready and available<br>
              for use in a matter of seconds accross<br>
              the ZuumPay ecosystem for instant<br>
              spending.<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-dollar-bitcoin-exchange-96.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 5.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>Crypto Exchange</v-card-title>
            <v-card-text>
              With ZuumPay we offer you exclusive<br>
              access and control over your money<br>
              with industry standard security<br>
              systems with<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-mobile-shop-coins-96.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 4.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>E-commerce</v-card-title>
            <v-card-text>
              With ZuumPay we offer you exclusive<br>
              access and control over your money<br>
              with industry standard security<br>
              systems with<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-topup-payment-100.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 3.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>Ride Hailing</v-card-title>
            <v-card-text>
              Our mission is to financially connect<br>
              everyone in the world for seamless,<br>
              instant and secured transactions<br>
              without borders.<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-worldwide-delivery-96.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 2.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>Transportations</v-card-title>
            <v-card-text>
              Our mission in to financially connect<br>
              everyone in teh world for seamless,<br>
              instant and secured transactions<br>
              without borders.<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
        <v-card width="285" outlined dark color="rgba(255,255,255,0.15)" class="flexColumn rounded-xl ma-4" elevation="0">
          <v-img src="../icons8-globe-96.png" contain style="position:absolute;top: -40px;right:0;" />
          <v-img src="../Mask Group 1.png" contain style="position:absolute;top: 0;right:0;" />
          <div>
            <v-card-title>E-commerce</v-card-title>
            <v-card-text>
              Our mission in to financially connect<br>
              everyone in teh world for seamless,<br>
              instant and secured transactions<br>
              without borders.<br>
              <v-btn text class="pa-0">
                <span class="btn-style">Learn More</span>
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </section>
    <v-divider />
    <section style="min-height:100vh;position: relative;" class="section-color">
      <v-container style="min-height: 100vh; justify-content: center;" class="flexColumn text-center">
        <v-card color="transparent" dark :elevation="0">
          <h5 class="font-weight-bold">Compare our Pricing</h5>
          <h2 class="mt-4">Get setup with your Zoomcard</h2>
          <v-card-subtitle class="font-weight-bold">
            While limit yourself with a super app when you can add a super card to spend both traditional and<br>
            digital currencies at every atm adn payment processing service in teh world.
          </v-card-subtitle>
        </v-card>
        <div class="d-flex flex-wrap justify-center">
          <v-card dark class="section-card flexColumn justify-center rounded-xl"
            :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '350px'">
            <div class="flexColumn">
              <v-img src="../alert.png" contain width="200" />
              <v-card-title>Remittance</v-card-title>
              <v-card-subtitle>
                Our mission in to financially connect<br>
                everyone in teh world for seamless,<br>
                instant and secured transactions<br>
                without borders.<br>
              </v-card-subtitle>
            </div>
          </v-card>
          <v-card dark class="section-card flexColumn justify-center rounded-xl"
            :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '350px'">
            <div class="flexColumn">
              <v-img src="../qr-code.png" contain width="200" />
              <v-card-title>Activate</v-card-title>
              <v-card-subtitle>
                Get your money ready and available for<br>
                use in a matter of seconds accross the<br>
                ZuumPay ecosystem for instant spending<br>
                and more.<br>
              </v-card-subtitle>
            </div>
          </v-card>
          <v-card dark class="section-card flexColumn justify-center rounded-xl"
            :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '350px'">
            <div class="flexColumn">
              <v-img src="../payment.png" contain width="200" />
              <v-card-title>Credit and Spend</v-card-title>
              <v-card-subtitle>
                With ZuumPay we offer you exclusive<br>
                access and control over your money with<br>
                industry standard security systems with
              </v-card-subtitle>
            </div>
          </v-card>
        </div>
      </v-container>
      <div style="position:absolute;bottom:0;right:0px; overflow: visible;">
        <v-img src="../line1.png" contain width="1100"></v-img>
      </div>
    </section>
    <section style="min-height:68vh;position:relative" class="rectangle14 d-flex align-center">
      <div style="position:absolute;top:0;">
        <v-img contain src="../Group 29.png" width="200"></v-img>
      </div>
      <v-container class="flexColumn">
        <v-card-title class="onPrimary--text">Payment partner</v-card-title>
        <v-card min-height="45vh" color="rgba(255,255,255,0.3)"
          class="rounded-xl flex-wrap d-flex flex-column justify-space-around " outlined width="100%">
          <div class="d-flex flex-wrap justify-space-around">
            <v-avatar size="80">
              <v-img src="../d11a2007c3125a5a0590bee1364b4dcf.png" />
            </v-avatar>
            <v-avatar size="80">
              <v-img src="../95ae20646831caf4c6c10fdf72742292.png" />
            </v-avatar>
            <v-avatar size="80">
              <v-img src="../1d91bed3686db0d359ea26716d6baf75.png" />
            </v-avatar>
            <v-avatar size="80">
              <v-img src="../a90b2e54c4f17ae01d4d6c4c2459fc8a.png" />
            </v-avatar>
            <v-avatar size="80">
              <v-img src="../9f89737c944136f51d8033fa96fdb901.png" />
            </v-avatar>
            <v-avatar size="80">
              <v-img src="../08d4c5b34388b6de753c4176e1b83999.png" />
            </v-avatar>
          </div>
          <div class="d-flex justify-space-around flex-wrap">
            <v-img max-width="100" contain
              src="../kisspng-visa-debit-card-credit-card-logo-mastercard-supermercado-5b3daa406f9d67.4063706315307679364572.png" />
            <v-img max-width="100" contain src="../citi1.png" />
            <v-img max-width="100" contain src="../afriland.png" />
            <v-img max-width="100" contain src="../575f2ba37001112157453950d3f41ab5.png" />
          </div>
        </v-card>
      </v-container>
      <div style="position:absolute;bottom:0;right:90px">
        <v-img contain src="../Path 4.png" width="120"></v-img>
      </div>
      <div style="position:absolute;bottom:0;right:0">
        <v-img contain src="../Group 30.png" width="200"></v-img>
      </div>
    </section>
    <section style="min-height:100vh;position: relative;" class="zummpayLogoBg d-flex align-center text-center">
      <div style="position:absolute;top:0;right: 6%;">
        <v-img contain src="../Group 29.png" width="200"></v-img>
      </div>
      <v-container class="flexColumn">
        <v-card class="flexColumn" color="transparent" :elevation="0" :width="$vuetify.breakpoint.smAndDown ? '100%' : '50%'">
          <h5 class="text-uppercase primary--text">got questions?</h5>
          <h2 class="mt-4 primary--text">We can help!</h2>
          <v-card-subtitle>
            while we can customize your plan to suit your needs,<br>
            most clients schedule regular services.
          </v-card-subtitle>
          <v-text-field prepend-inner-icon="mdi-magnify" label="Ask a questions..." class="search rounded-pill" solo dense>
          </v-text-field>
        </v-card>
        <div class="flexColumn justify-space-around flex-wrap flex-md-row" style="max-width:100%">
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show1 = !show1">
              <v-btn text style="color:#4652B0">Where can I withdraw my money?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, veritatis dolore debitis voluptate
                  recusandae porro pariatur fugit animi libero natus inventore asperiores optio quidem quaerat, dolorem
                  aperiam quos laboriosam ut.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show2 = !show2">
              <v-btn text style="color:#4652B0">Where can I withdraw my money?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate necessitatibus cumque, odit laborum
                  animi nobis delectus et vitae magni, praesentium exercitationem placeat quas? Veritatis tenetur laboriosam
                  eum facere cumque.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show3 = !show3">
              <v-btn text style="color:#4652B0">Where can I withdraw my money?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, excepturi? Voluptatibus quos nobis tempore
                  provident nulla consequuntur aliquam pariatur natus libero asperiores! Quaerat perferendis dolor facilis,
                  dignissimos exercitationem quis magnam.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show4 = !show4">
              <v-btn text style="color:#4652B0">Recipient didn't receive the money?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show4">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, odio quo, voluptatibus consectetur atque
                  facere dolore dignissimos iste repudiandae aperiam eligendi error, deserunt beatae sit voluptatum minus
                  delectus suscipit architecto!
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show5 = !show5">
              <v-btn text style="color:#4652B0">Where can I withdraw my money?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show5">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Innovator angel investore branding rockstar seed round growth
                  hacking channels business-to-consumer user experience
                  infografic. business-to-consumer market gamifications stock
                  anlytics MVP. Agile development low hanging fruit beta influcer.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show6 = !show6">
              <v-btn text style="color:#4652B0">How To track my transfer?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show6 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show6">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit repudiandae placeat voluptates dicta
                  numquam ad non rem magnam, delectus repellendus doloremque! Assumenda debitis illum minima quaerat magni,
                  maxime soluta.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;"  @click="show7 = !show7">
              <v-btn text style="color:#4652B0">How Zuumpay works?</v-btn>
              <v-spacer />
              <v-btn icon>
                <v-icon color="primary">{{ show7 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show7">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet vitae facilis, omnis iure
                  provident esse veritatis sequi exercitationem ratione labore nemo qui quisquam voluptatem perspiciatis.
                  Quibusdam molestiae enim consectetur!
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mt-4 rounded-lg flexColumn expand" :width="$vuetify.breakpoint.smAndDown ? '100%' : '45%'"
            height="auto" style="border: 1px solid #4652B0;" tile>
            <v-card-actions style="width: 100%;" @click="show(),show8=true">
              <v-btn text style="color:#4652B0">How to create account on Zuumpay?</v-btn>
              <v-spacer />
              <v-btn icon @click="show(),show8=true">
                <v-icon color="primary">{{ show8 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show8">
                <v-divider></v-divider>
                <v-card-text class="text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur culpa odit iure hic quibusdam a at
                  velit expedita, fuga nisi sint excepturi reprehenderit perspiciatis, eaque maiores ab pariatur delectus
                  possimus!
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
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
      items: ["USD", "XAF", "EUR"],
      currencyReceive: "XAF",
      currencySend: "USD",
      sendMoney: true,
      requestMoney: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
  body {
    .section-color{
      background: $section-color;
    }
    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .padding{
      .v-card__subtitle, .v-card__text, .v-card__title{
        padding: 16px 0;
      }
    }
    .index{
      padding: 4px 16px;
      min-height: 100vh;
      .v-card__title {
        font-weight: bold !important;
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
      .homeCard {
        background:rgba(164, 172, 234,.2);
        width: 460px;
        .v-input__slot:before {
        border: 0 !important;
        }
        .v-input__slot:after {
          border: 0 !important;
        }
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
        .v-toolbar {
          display: flex;
          justify-content: center;
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
    }
    .card1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 24px !important;
      margin-top: 16px;
      background: rgba(255,255,255,0.15) !important;
    }
    @media (min-width:1264px) {
      .union3 {
        left:240px !important;
        top:40px !important;
        .v-image {
          width:250px !important;
        }
      }
      .union4 {
        top:350px !important;
        left:480px !important;
        .v-image {
          width:250px !important;
        }
      }
    }
    @media (max-width:400px) {
      .v-card__title,.v-card__subtitle {
        br{
          display:none !important;
        }
      }
      .space {
        display:block;
      }
    }
    .section-card {
      height:400px; 
      background: rgba(255,255,255,0.15) !important;
      margin: 16px;
      max-width: 100%;
    }
    .rectangle14 {
      background: url('../static/Rectangle 14.png') no-repeat center center !important; 
      background-size: cover !important;
    }
    .zummpayLogoBg {
      background:url('../static/Logo_alt_dark_v04-1.png') no-repeat 50% 50%;
      background-size:contain;
    }
    .search {
      width: 100%;
      .v-label, .notranslate {
        color: #4652B0 !important;
      }
      .v-input__slot {
        background-color: rgba(70, 82, 176,.2) !important; 
      }
    }
  }
</style>