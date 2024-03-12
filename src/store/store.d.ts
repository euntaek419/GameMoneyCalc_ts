import { createStore } from 'vuex';
import { mapGetters, mapState } from 'vuex';
import { Store } from 'vuex'



declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    Money : number,
    Cash : number, // 현금
    Ratio : number, // 왼쪽 비율
    ExchangeRatio : number, // 오른쪽 비율
    Persent : number, // 할인,추가증정 %
    isCashOption: boolean[],
    isExchange: boolean, // 비율 변경 여부
    compair: number,
    compairpersent: number,
    leftresult : number,
    rightresult: number,
    fontchange: any[],
    isWin: boolean[],
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
    state() {
        return {
            Money : '', // 게임 머니
            Cash : '', // 현금
            Ratio : '', // 왼쪽 비율
            ExchangeRatio : '', // 오른쪽 비율
            Persent : '', // 할인,추가증정 %
            isCashOption: [true, false],
            isExchange: false, // 비율 변경 여부
            compair: '',
            compairpersent: '',
            leftresult : '',
            rightresult: '',
            fontchange: [],
            isWin: [false, false],
        }
    }
})