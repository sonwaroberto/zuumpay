<template>
  <v-main class="bgImage">
    <section style="padding: 4px 16px" class="bgColor">
      <v-container class="d-flex flex-column justify-center align-center">
        <section style="width:100%" class="d-flex flex-md-row flex-column justify-md-space-betwee justify-center align-center">
          <v-card elevation="0" class="card1 rounded-xl" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-subtitle class="onPrimary--text">Wallet Balance</v-card-subtitle>
            <v-card-text class="onPrimary--text" style="font-size: 30px;">2,072,125<span style="font-size: 12px;">XFA</span>
            </v-card-text>
          </v-card>
          <span style="width:24px"></span>
          <span style="height:24px" class="d-block"></span>
          <v-card elevation="0" class="card1 rounded-xl" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-subtitle class="onPrimary--text">Today's Sales</v-card-subtitle>
            <v-card-text class="onPrimary--text" style="font-size: 30px;">572,125<span style="font-size: 12px;">XFA</span>
            </v-card-text>
          </v-card>
          <span style="width:24px"></span>
          <span style="height:24px" class="d-block"></span>
          <v-card elevation="0" class="card1 rounded-xl" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-subtitle class="onPrimary--text">Gross Sales</v-card-subtitle>
            <v-card-text class="onPrimary--text" style="font-size: 30px;">26,072,125<span style="font-size: 12px;">XFA</span>
            </v-card-text>
          </v-card>
        </section>
        <span style="width:24px"></span>
        <span style="height:24px" class="d-block"></span>
        <section style="width:100%" class="d-flex flex-md-row flex-column justify-md-space-between justify-center ">
          <v-card elevation="0" style="flex-grow:1" class="card2 rounded-xl flex-center flex-column" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-text class="flex-center flex-column">
              <v-badge color="#021291" overlap bottom class="profile" icon="mdi-camera">
                <v-avatar size="100">
                  <v-img src="../../Ellipse_15.png"></v-img>
                </v-avatar>
              </v-badge>
            </v-card-text> 
            <v-card-title class="onPrimary--text font-weight-bold">TFC VIP BUEA</v-card-title>
            <v-card-actions class="flex-center justify-space-between" style="width:100%">
              <v-btn color="primary" class="onPrimary--text pa-4">withdraw</v-btn>
              <v-btn color="primary" class="onPrimary--text px-10">send</v-btn>
            </v-card-actions>
            <v-card-text align="center" class="primary--text">EDIT PROFILE</v-card-text>
          </v-card>
          <span style="width:24px"></span>
          <span style="height:24px" class="d-block"></span>
          <v-card elevation="0" min-width="66%" height="480" color="rgba(122, 130, 198,.3)"  class="rounded-xl flex-center flex-column " :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-title class="onPrimary--text">Analysis</v-card-title>
            <div class="chart-div">
              <LineChart :chartData="chartData" :options="chartOptions" class="line-chart"/>
            </div>
          </v-card>
        </section>
        <span style="width:24px"></span>
        <span style="height:24px" class="d-block"></span>
        <section style="width:100%" class="d-flex flex-md-row flex-column justify-md-space-between align-start">
          <v-card elevation="0" style="flex-grow:1" class="card2 rounded-xl flex-center flex-column" :width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'">
            <v-card-text class="flex-center flex-column">
              <v-img class="bgimg" contain src="../../Path 463.png" width="150"></v-img>
            </v-card-text> 
            <v-card-actions class="d-flex align-center justify-center" style="width:100%">
              <v-btn color="primary" class="onPrimary--text pa-4">Activate qr scan code</v-btn>
            </v-card-actions>
          </v-card>
          <span style="width:24px"></span>
          <span style="height:24px" class="d-block"></span>
            <v-card style="flex-grow: 2;max-width: 100%" :min-width="$vuetify.breakpoint.smAndDown ? '100%' : '66%'" elevation="0" color="transparent">
              <v-data-table
                :headers="headers"
                :items="TableElement"
                :elevation="0"
                class="flexColumn rounded-xl bgTable primary--text"
                style="width: 100% !important;"
              >
                <template v-slot:top>
                  <v-toolbar flat color="transparent" style="width: 100%;text-align: center;" > 
                    <v-toolbar-title style="width: 100%;" class="white--text">Recent transactions</v-toolbar-title>
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
        
        </section>
      </v-container>
    </section>
  </v-main>
</template>

<script>
  import LineChart from '../../../components/LineChart.vue'
  export default{
    components:{LineChart},
    layout:"overview",
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
            status:'Approved',
            amount: '$2323(USD)'
          } 
        ],
        chartData: {
          labels:["text","text","text","text","text"],
          datasets: [
            {
              label:"Gross volume",
              borderColor:"#4652B0",
              
              // backgroundColor:"red",
              borderWidth:2,
              data:[14,38,50,68,89],
              
            
            },
            {
              label:"$86,903 Total",
              borderColor:"#021291",
              // backgroundColor:"black",
              color:"red",  
              borderWidth:2,
              data:[16,30,47,63,75]
            }
          ],
        },
        chartOptions: { 
          maintainAspectRation: false,
          responsive: true,
          
          tooltips: {
            backgroundColor:"#021291",
            titleFontColor:"#fff",
            bodyFontColor:"#fff",
            position:"nearest",
            mode:"nearest",
            intersect:0,
            bodySpacing:4,
            xPadding:20,
            
          },
          legend: {
    display: true,
  
    labels: {
      boxWidth: 0,
      fontColor: '#4652B0',
      fontWeight:"bold",
      fontSize: 16
    }},
    layout: {
        
        },
    // title: {
    //   display: true,
    //   text: 'Analysis',
    //   fontColor: "white"
    // },
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: "white"
        }
      }],
      yAxes: [{
        
        gridLines: {
          color: "white"
        }
      }]
    },
        }
      
      }
    }
    
  }
</script>

<style lang="scss">
    body {
      .bgimg {
        opacity:50%;
        border-radius: 30%;
        .v-responsive__content {
          background:#fff;
        }
      }
      #line-chart {
        max-width: 100%;
        height: 414px !important;
        width: 566px !important;
        
      }
      .flex-center {
        display: flex;
        align-items: center;
      }
      .bgImage {
          background: linear-gradient(120deg,rgba(255, 255, 255,20%),rgba(122, 130, 198,20%),rgba(70, 82, 176,20%));
      }
      .bgColor {
        background-image: url('../../../static/Logo_alt_dark_v04-1.png'); 
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        min-height: 100vh;
      }
      .card1 {
        background: #7a82c64d !important;
        height:120px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 50px !important;
      }
      .card2 {
        background: rgba(122, 130, 198,.3) !important;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 50px !important;
      }
      .profile{
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
      .v-data-table {
      background-color: rgba(122, 130, 198,.4) !important;
    }
    .v-data-table__wrapper {
      width: 100% !important;
    }
    tr:nth-child(odd) {
      background-color: rgba(122, 130, 198,.4) !important;
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