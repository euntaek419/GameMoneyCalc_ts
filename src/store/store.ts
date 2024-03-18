import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
    state: () => ({
        Money : 0, // 게임 머니
        Cash : 0, // 현금
        Ratio : 0, // 왼쪽 비율
        ExchangeRatio : 0, // 오른쪽 비율
        Persent : 0, // 할인,추가증정 %
        isCashOption: [true, false],
        isExchange: false, // 비율 변경 여부
        compair: 0,
        compairpersent: '',
        leftresult : 0,
        fontchange: ['', ''],
        rightresult: 0,
        isWin: [false, false],
    }),
    getters: {
        cashOption: (state) => {
            if(state.isCashOption[0] == true){
                return Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }
            else if(state.isCashOption[1] == true){
                return Math.floor( state.Cash * ( 1 + state.Persent / 100))
            }
        },
        cashResult: (state) => {
            if(state.Cash > 0 && state.Money > 0 && state.Ratio > 0 && state.Persent < 100){
                if(state.ExchangeRatio > 0){
                    state.leftresult = state.Money / state.Ratio * state.ExchangeRatio
                }else{
                    state.leftresult = state.Money / state.Ratio
                }

                if(state.Persent > 0){
                    state.rightresult = Math.floor( state.Cash - state.Cash * state.Persent / 100 )
                }else{
                    state.rightresult = state.Cash
                }
            
                if(state.rightresult == state.leftresult){
                    state.compair = 0
                    state.compairpersent = ''
                    state.isWin = [true, true];
                    state.fontchange = ["#02fa97", "#02fa97"];
                    return 0;
                }else if(state.rightresult < state.leftresult){
                    state.compair = state.leftresult - state.rightresult
                    state.compairpersent = ((state.compair / state.rightresult) * 100).toFixed(1);
                    state.isWin = [false, true];
                    state.fontchange = ["", "#02fa97"];
                    return state.compair.toFixed(1);
                }else if(state.rightresult > state.leftresult){
                    state.compair = state.rightresult - state.leftresult
                    state.compairpersent = ((state.compair / state.leftresult) * 100).toFixed(1);
                    state.isWin = [true, false];
                    state.fontchange = ["#02fa97", ""];
                    return state.compair.toFixed(1);
                }
            }else{
                state.isWin = [false, false]
                state.fontchange = ["", ""]
            }
        },
        readinput: () => (payload:number) => {
            if(payload < 10000){
                return payload 
            }
            else if(payload >= 10000 && payload < 100000000){
                if(payload % 10000 == 0){
                    return Math.floor(payload / 10000) + ' 만 '
                }
                return Math.floor(payload / 10000) + ' 만 ' + payload % 10000
            }
            else if(payload >= 100000000){
                if(payload % 100000000 == 0){
                    return Math.floor(payload / 100000000) + ' 억 '
                }
                else if(payload % 10000 == 0){
                    return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 '
                }
                else if(Math.floor( payload / 10000 ) % 10000 == 0){
                    return Math.floor(payload / 100000000) + ' 억 ' + payload % 10000
                }
                return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 ' + payload % 10000   
            }
        }
    },
    actions: {
        updateMoney(payload:number){
            this.Money = payload
        },
        updateCash(payload:number){
            this.Cash = payload
        },
        updateRatio(payload:number){
            this.Ratio = payload
        },
        updatePersent(payload:number){
            this.Persent = payload
        },
        updateExchangeRatio(payload:number){
            this.ExchangeRatio = payload
        },
        updateisExchange(payload:boolean){
            this.isExchange = payload
        },
        updateisCashOption(payload:any){
            this.isCashOption = payload
        },
    },
})