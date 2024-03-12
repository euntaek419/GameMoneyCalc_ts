<script lang="ts">
import { mapGetters, mapState } from 'vuex';
import { defineComponent } from 'vue';
import gsap from 'gsap';

interface ComponentData {
  Cash: number | "",
  Money : number | "", // 게임머니 입력창
  Ratio: number | "", // 비율 입력창
  Persent: any, // 할인, 추가증정 입력창
  ExchangeRatio: number | "", // 비율 변경 입력창
  IsExchange: boolean, // 비율 변경 여부
  isCashOption: boolean[], // 할인, 추가증정 여부
  cashResultweened: number,
  compairpersentweened: number,
}

export default defineComponent ({
  data(): ComponentData {
    return {
      Cash: '', //게임캐시 입력창
      Money : '', // 게임머니 입력창
      Ratio: '', // 비율 입력창
      Persent: '', // 할인, 추가증정 입력창
      ExchangeRatio: '', // 비율 변경 입력창
      IsExchange: false, // 비율 변경 여부
      isCashOption: [true, false], // 할인, 추가증정 여부
      cashResultweened: 0,
      compairpersentweened: 0,
      // Cashtweened: 0, // 테스트
    }
  },
  computed:{
    ...mapState([
      'isWin','compairpersent','fontchange',
      ]),
    ...mapGetters([
      'cashResult','cashOption'
    ])
  },

  methods: {
    updateMoney(){
      this.$store.dispatch('updateMoney',this.Money)
    },
    updateCash(){
      this.$store.dispatch('updateCash', this.Cash)
    },
    updateRatio(){
      this.$store.dispatch('updateRatio', this.Ratio)
    },
    updatePersent(){
      if(this.Persent > 100 && this.isCashOption[0] == true){
        this.Persent = 99.9
      }
      if(this.Persent > 1000 && this.isCashOption[1] == true){
        this.Persent = 1000
      }
      this.$store.dispatch('updatePersent', this.Persent)
    },
    updateisExchange(){
      this.IsExchange = !this.IsExchange
      this.ExchangeRatio = 0;
      this.updateExchangeRatio()
      this.$store.dispatch('updateisExchange', this.IsExchange)
    },
    updateExchangeRatio(){
      this.$store.dispatch('updateExchangeRatio', this.ExchangeRatio)
    },
    updateisCashOption(){
      this.$store.dispatch('updateisCashOption', this.isCashOption)
    },
    changeCashOption(payload:any) {
      if(payload == 'B'){
        this.isCashOption = [false, true];
        this.Persent = 0
        this.updateisCashOption()
        this.updatePersent()
      }
      else{
        this.isCashOption = [true,false]
        this.Persent = 0
        this.updateisCashOption()
        this.updatePersent()
      }
    },
  },

  watch: {
    // cashResult(n) {
    //   gsap.to(this, { duration: 0.5, cashResultweened: Number(n) || 0 })
    // },
    compairpersent(n) {
      gsap.to(this, { duration: 0.5, compairpersentweened: Number(n) || 0 })
    },
  }
})
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.InfoBox{
  position: absolute;
  width: 22.2%;
  height: 7vh;
  border: solid 2px #000;
  background-color: #5b5b5b;
  color:#fff;
  left: 50%;
  transform:translate(-50%, 0);
  /* top: 8.4vh; */
  top: 108.4vh;

}

.InfoText{
  background-color: transparent;
  font-family: "Galmuri11";
  font-size: 2.5vh;
  top: 50%;
  transform:translate(0, 50%);
  text-align: center;
}

.WhatMoney{
  position: absolute;
  top: 115%;
  width: 100%;
  font-family: "Galmuri11";
  font-size: 25px;
  color: #fff;
}

.Auction{
  position: absolute;
  left: 5%;
}

.CashShop{
  position: absolute;
  right: 5%;
  text-align: right;
}

.WhenSell{
  position: absolute;
  top: 125%;
  width: 100%;
  font-family: "Galmuri11";
  font-size: 30px;
  color: #9b9b9b;
}

.ResultCalc{
  color : #02fa97;
}

.winImg{
  position: absolute;
  top:100%;
  z-index: 0;
  left: -50px;
  background-color: transparent;
}

.winImgR{
  position: absolute;
  top:100%;
  z-index: 0;
  right : 0;
  transform: scaleX(-1);
  background-color: transparent;
}

.AuctionSell{
  position: absolute;
  left: 5%;
}

.AuctionInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  outline: none;
  border: none;
}

.CashSell{
  position: absolute;
  right: 5%;
  text-align: right;
}


.CashInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  text-align: right;
  outline: none;
  border: none;
}

.UnderBar{
  margin-top: -50px;
}

.ExchangeBox{
  position : absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  color:white;
  font-size: 25px;
  border: 1px solid;
  font-family: 'Galmuri11';
  z-index: 1;
}

.ExchangeRatio{
  position : absolute;
  font-size: 25px;
  top: 50%;
  right : 5%;
  margin-right: 150px;
  transform:translate(0, -50%);
  background-color: transparent;
}

.ExchangeInput{
  position : absolute;
  height: 40px;
  width: 160px;
  font-family: 'Galmuri11';
  color:#fff;
  font-size: 25px;
  top:50%;
  right:0;
  transform:translate(0, -50%);
  text-align: center;

}

.ExchangeRead{
  position : absolute;
  left: 5%;
  top: 50%;
  transform:translate(0, -50%);
  background-color: transparent;
}

.MiniLogo{
  position: absolute;
  top: 50%;
  left: 50%;
  background-color:transparent;
  transform:translate(-50%, -50%);
}

.Exchange_img{
  position: absolute;
  background-color: gray;
  right:1%;
  cursor: pointer;
}

.SetBox{
  position: absolute;
  top:170%;
  width: 100%;
  height: 30%;
  background-color: gray;
}

.GiftCardOption{
  position: absolute;
  width: 100%;
  text-align: center;
  left:50%;
  transform:translate(-50%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
  padding: 1%;
}

.GiftCardInputBox{
  position: absolute;
  height: 95%;
  width: 40%;
  right: 5%;
  background-color: #000;
}

.GiftCardInput{
  position: absolute;
  width: 100%;
  height: 65%;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  outline: none;
  border: none; 
  z-index: 0;
  text-align: center;
  top: 55%;
  transform:translate(0, -55%);
  padding:0px;
}

.Persent{
  position: absolute;
  left:50%;
  margin-left:120px;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  z-index: 0;
  top: 55%;
  transform:translate(-35%, -55%);
}

.GiftCardInput_Under{
  position: absolute;
  left:50%;
  transform:translate(-50%, 0);
  bottom:20%;
  color: #fff;
  font-family: "MorganiteBold";
}

.WhatPersent{
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 15%;
}

.DiscountF{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  height:40px;
  left:0;
  width: 50%;
  height: 100%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.DiscountF:hover{
  background-color: #000;
  color:#02fa97
}

.DiscountT{
  position: absolute;
  background-color: #000;
  color:#02fa97;
  font-family: 'Galmuri11';
  height:100%;
  left:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF{
  position: absolute;
  bottom:0;
  background-color: gray;
  font-family: 'Galmuri11';
  height:100%;
  right:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF:hover{
  background-color: #000;
  color:#02fa97
}

.BonusT{
  position: absolute;
  background-color: #000;
  color:#02fa97;
  font-family: 'Galmuri11';
  height:40px;
  right:0;
  width: 50%;
  height: 100%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.Reverse{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  width: 100%;
  font-size: 25px;
  z-index: 1;
  top:50%;
  transform:translate(0, -50%);
}

.Reverse:hover{
  background-color: #000;
  color: #fff
}

.CashRatioInputBox{
  position: absolute;
  height: 95%;
  width: 40%;
  left: 5%;
  background-color: #000;
}

.CashRatio{
  position: absolute;
  width: 100%;
  text-align: center;
  right:50%;
  transform:translate(50%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
  padding: 1%;
}

.Ratio{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  right:25%;
  top: 55%;
  transform:translate(0, -55%);
  z-index: 0;
}

.Colon{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  left:50%;
  top: 55%;
  transform:translate(-50%, -65%);
  z-index: 0;
}

.CashRatioInput{
  position: absolute;
  left: 0;
  top: 55%;
  width: 45%;
  height: 65%;
  transform:translate(0, -55%);
  font-size: 130px;
  /* font-size: 165px; */
  color: #fff;
  text-align: right;
  font-family: "MorganiteBold";
  z-index: 0;
  text-align: center;
  outline: none;
  border: none;
}

.CashRatioInput_Under{
  position: absolute;
  left : 20%;
  transform:translate(-15%, 0);
  bottom: 20%;
}

.upZ-index{
  z-index: 10;
}
</style>