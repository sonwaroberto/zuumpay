<template>
  <v-main class="bgi" style="max-width: 100%;">
    <section style="padding: 4px 16px" class="bg">
      <v-container class="d-flex flex-md-row flex-column align-md-start align-center">
        <div style="flex-grow: 2;" class="d-flex flex-column">
          <div class="d-flex justify-space-between flex-md-row flex-column">
            <v-card elevation="0" class="card1 rounded-xl" v-if="!authLoading && $store.state.account != null">
              <v-card-subtitle class="onPrimary--text">Available Balance</v-card-subtitle>
              <v-card-text class="onPrimary--text" style="font-size: 30px;">{{$store.state.account.accountBalance}}<span style="font-size: 12px;">XFA</span>
              </v-card-text>
            </v-card>
            <span style="width:24px"></span>
            <span style="height:24px" class="d-block"></span>
            <v-card elevation="0" dark class="card1 rounded-xl">
              <v-card-subtitle class="onPrimary--text">Total Received</v-card-subtitle>
              <v-card-text class="onPrimary--text" style="font-size: 30px;">2,072,125<span style="font-size: 12px;">XFA</span>
              </v-card-text>
            </v-card>
          </div>
          <span style="height:24px"></span>
          <div style="max-width: 100%;">
            <v-card style="flex-grow: 2;max-width: 100%;" elevation="0" color="transparent">
              <v-data-table
                :headers="headers"
                :items="TableElement"
                :elevation="0"
                class="flexColumn rounded-xl primary--text"
                style="width: 100% !important;"
              >
                <template v-slot:top>
                  <v-toolbar flat color="transparent"> 
                    <v-toolbar-title class="primary--text">Recent Activities</v-toolbar-title>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.status`]="{ item }">
                  <template v-if="item.status == 'Approved'">
                    <span class="success--text">{{item.status}}</span>
                  </template>
                  <template v-if="item.status == 'Rejected'">
                    <span class="error--text">{{item.status}}</span>
                  </template>
                </template>
              </v-data-table>
            </v-card>
          </div>
          <span style="height:12px" class="d-block"></span>
          <div style="max-width: 100%;">
            <v-card elevation="0" class="card3 d-flex justify-center align-center rounded-xl" style="max-width: 100%;">
              <v-card-subtitle class="primary--text">Referal Link</v-card-subtitle>
              <v-card-text style="width:100%">
                <VO ref="observer" tab="form">
                  <VP rules="required" v-slot="{ errors }" name="message" class="d-flex">
                    <v-text-field class="msg rounded-lg email onPrimary--text" style="width:90%" :width="$vuetify.breakpoint.xlAndmd ? '100%' : '500px'" dense label="https://www.zoompay.com/sdfdsagafd" 
                      outlined placeholder="https://www.zoompay.com/sdfdsagafd">
                    </v-text-field>
                      <v-btn color="primary" class="onPrimary--text ml-4 px-4">
                      <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                  </VP>
                </VO>
              </v-card-text>
            </v-card>
            <span style="height:24px" class="d-block"></span>
          </div>  
        </div>
        <span style="width:24px"></span>
        <div style="width:286px;">
          <v-card elevation="0" style="max-width: 100%;" class="card2 onPrimary--text rounded-xl flexColumn mt-sm-0">
            <h6 class="primary--text mt-2">CHAT WITH US</h6>
            <v-card-text class="onPrimary--text text-center">Let our experts help you with<br>
              our services
            </v-card-text>
            <v-card-text style="width: 200px;" class="flexColumn">
              <VO ref="observer" tab="form">
                <VP rules="required" v-slot="{ errors }" name="message">
                  <v-text-field class="msg rounded-lg email onPrimary--text" dense label="Send message..." 
                    outlined placeholder="Send message...">
                  </v-text-field>
                </VP>
              </VO>
              <v-btn color="primary" class="onPrimary--text px-8">
                send
              </v-btn>
            </v-card-text>
          </v-card>
          <span class="d-block" style="height:24px"></span>
          <v-card elevation="0" class="card2 rounded-xl" style="max-width: 100%;">
            <v-card-text class="primary--text" align="center">Contact</v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
            <v-card-text class="d-flex align-center">
              <v-badge class="badgeposition">
                <v-avatar size="40">
                  <v-img src="/Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <b class="ml-6 onPrimary--text">Ndamo Ndamo</b><br>
                <span class="ml-4 onPrimary--text">online</span>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </section>
  </v-main>
</template>
<script>
  export default{
    layout:"clientDashboard",
    data() {
      return {
        headers: [
          {text:"Date",align: 'start',value: 'date',sortable: false,},
          {text:"Description",value: 'description',sortable: false, },
          {text:"Status",value: 'status',sortable: false, },
          {text:"Amount",value: 'amount',sortable: false,},
        ],
        TableElement: [
          {
            date: '16 Jan',
            description: "Descrition Title",
            status:'Approved',
            amount: '$2323(USD)'
          },
          {
            date: '16 Jan',
            description: "Descrition Title",
            status:'Rejected',
            amount: '$2323(USD)'
          } 
        ],
      }
    }
  }

</script>

<style lang="scss">
  body {
    .badgeposition{
      border: 3px solid #021291;
      border-radius: 50%;
      padding: 6px;
      span span {
        display: none;
      }
    }
    .bgi {
      background-color: #f4f4f4;
    }
    .bg {
      background-image: url('../../static/Logo_alt_dark_v04-1.png'); 
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
      min-height: 100vh;
    }
    @media (min-width: 660px) { 
      .bg {
        background-size: 50%;
      }
    }
    .flexColumn {
      display: flex;
      flex-direction: column;
      align-items:center;
    }
    .card1 {
      background: rgba(122, 130, 198,.4) !important;
      height:120px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 50px !important;
    }
    .card3 {
      background: rgba(122, 130, 198,.4) !important;
      height:120px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .card2 {
      background: rgba(122, 130, 198,.4) !important;
      width: 286px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .msg {
      fieldset {
        background: linear-gradient(45deg,#c4cbda,#adb5f7);
        border: 0px;
      }
      label {
        color: white !important;
      }
    }
    .v-data-table {
      background-color: rgba(162, 170, 239, 0.4) !important;
    }
    .v-data-table__wrapper {
      width: 100% !important;
    }
    .v-data-footer {
      display: none;
    }
    tr:nth-child(odd) {
      background-color: rgba(162, 176, 223, 0.4) !important;
    }
    tr:nth-child(even),.v-data-table-header tr {
      background-color:rgba(122, 130, 198,.6) !important;
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
  }
</style>